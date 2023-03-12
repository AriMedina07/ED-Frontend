/* eslint-disable no-console */
import { IRawSurveyAvg, ISurveyAvg } from '@/interfaces/coordinator';
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
}
