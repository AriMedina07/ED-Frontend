/* eslint-disable no-console */
import {
   IStudent,
   IRawStudent,
   ISurveyData,
   IProfessorStudent,
   IRawProfessorStudent,
   IQuestionQuestionnaire,
   IRawIQuestionQuestionnaire,
} from '@/interfaces/student';
import { API_URL } from '../../utils/apiUrl';
import axios from 'axios';
import { IStudentApi } from '../interfaces';

export class AxiosStudentApi extends IStudentApi {
   async getStudentsByGroup(idGroup: number): Promise<IStudent[]> {
      const response: IRawStudent[] = await axios
         .get(`${API_URL}/coordinator/student/list/${idGroup}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const students: IStudent[] = response.map((student) => ({
         idPeriod: student.id_periodo,
         careerName: student.nombre_carrera,
         groupKey: student.clave_grupo,
         key: student.matricula_alumno,
         name: student.nombre,
         maternalSurname: student.apellido_materno,
         paternalSurname: student.apellido_paterno,
      }));

      return students;
   }

   async saveSurveyData(
      idSurvey: number,
      surveyData: ISurveyData,
   ): Promise<number | never[]> {
      const response = await axios
         .post(`${API_URL}/student/saveAnswer/${idSurvey}`, surveyData)
         .then((res) => res.status)
         .catch((err) => {
            console.log(err);
            return [];
         });
      return response;
   }

   async getProfessorByStudent(key: number): Promise<IProfessorStudent[]> {
      const response: IRawProfessorStudent[] = await axios
         .get(`${API_URL}/student/professors/${key}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const professors: IProfessorStudent[] = response.map((professor) => ({
         idPeriod: professor.id_periodo,
         idCourse: professor.id_curso,
         idSurvey: professor.id_encuesta,
         idSubject: professor.id_materia,
         subjectName: professor.nombre_materia,
         groupKey: professor.clave_grupo,
         subjectKey: professor.nombre_corto_materia,
         idProfessor: professor.id_docente,
         name: professor.nombre,
         maternalSurname: professor.apellido_materno,
         paternalSurname: professor.apellido_paterno,
         careerName: professor.nombre_carrera,
      }));

      return professors;
   }

   async getQuestionsByQuestionnaire(): Promise<IQuestionQuestionnaire[]> {
      const response: IRawIQuestionQuestionnaire[] = await axios
         .get(`${API_URL}/student/survey`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const questions: IQuestionQuestionnaire[] = response.map((question) => ({
         idQuestion: question.id_pregunta,
         idQuestionnaire: question.id_cuestionario_ad,
         title: question.pregunta,
      }));

      return questions;
   }
}
