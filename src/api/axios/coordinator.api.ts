/* eslint-disable no-console */
import {
   IProfessorGroup,
   IGroupAvg,
   IProfessorAvg,
   IQuestionAvg,
   IRawProfessorGroup,
   IRawGroupAvg,
   IRawProfessorAvg,
   IRawQuestionAvg,
   IRawSurveyAvg,
   ISurveyAvg,
} from '@/interfaces/coordinator';
import { API_URL } from '../../utils/apiUrl';
import axios from 'axios';
import { ICoordinatorApi } from '../interfaces/coordinator.interface';

export class AxiosCoordinatorApi extends ICoordinatorApi {
   async getSurveyAvgByCareer(idCareer: number): Promise<ISurveyAvg[]> {
      const response: IRawSurveyAvg[] = await axios
         .get(`${API_URL}/coordinator/periods/${idCareer}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const surveyAvg: ISurveyAvg[] = response.map((survey) => ({
         idPeriod: survey.id_periodo,
         groupKey: survey.clave_grupo,
         subjectName: survey.nombre_materia,
         careerName: survey.nombre_carrera,
         careerKey: survey.nombre_corto,
         avgScore: survey.promedio_puntuacion,
      }));

      return surveyAvg;
   }

   async getGroupsByProfesor(idProfessor: number): Promise<IProfessorGroup[]> {
      const response: IRawProfessorGroup[] = await axios
         .get(`${API_URL}/coordinator/groups/${idProfessor}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const professorGroups: IProfessorGroup[] = response.map(
         (professorGroup) => ({
            idProfessor: professorGroup.id_docente,
            idPeriod: professorGroup.id_periodo,
            groupKey: professorGroup.clave_grupo,
            subjectName: professorGroup.nombre_materia,
            name: professorGroup.nombre,
            maternalSurname: professorGroup.apellido_materno,
            paternalSurname: professorGroup.apellido_paterno,
            avgScore: professorGroup.promedio_puntuacion,
         }),
      );

      return professorGroups;
   }

   async getProfesorsAvgByPeriod(idPeriod: number): Promise<IProfessorAvg[]> {
      const response: IRawProfessorAvg[] = await axios
         .get(`${API_URL}/coordinator/profesors/average/${idPeriod}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const professorsAvg: IProfessorAvg[] = response.map((professorAvg) => ({
         idPeriod: professorAvg.id_periodo,
         groupKey: professorAvg.clave_grupo,
         subjectName: professorAvg.nombre_materia,
         careerName: professorAvg.nombre_carrera,
         name: professorAvg.nombre,
         maternalSurname: professorAvg.apellido_materno,
         paternalSurname: professorAvg.apellido_paterno,
         avgScore: professorAvg.promedio_puntuacion,
      }));

      return professorsAvg;
   }

   async getGroupAvgByCarrer(idCareer: number): Promise<IGroupAvg[]> {
      const response: IRawGroupAvg[] = await axios
         .get(`${API_URL}/coordinator/groups/average/${idCareer}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const groupsAvg: IGroupAvg[] = response.map((groupAvg) => ({
         idPeriod: groupAvg.id_periodo,
         groupKey: groupAvg.clave_grupo,
         careerName: groupAvg.nombre_carrera,
         avgScore: groupAvg.promedio_puntuacion,
      }));

      return groupsAvg;
   }

   async getQuestionAvgByGroup(idGroup: number): Promise<IQuestionAvg[]> {
      const response: IRawQuestionAvg[] = await axios
         .get(`${API_URL}/coordinator/questions/average/${idGroup}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const questionsAvg: IQuestionAvg[] = response.map((questionAvg) => ({
         idPeriod: questionAvg.id_periodo,
         idQuestion: questionAvg.id_pregunta,
         title: questionAvg.pregunta,
         idQuestionnaire: questionAvg.id_cuestionario_ad,
         groupKey: questionAvg.clave_grupo,
         avgScore: questionAvg.promedio_puntuacion,
      }));

      return questionsAvg;
   }
}
