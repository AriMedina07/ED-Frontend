/* eslint-disable no-unused-vars */
import {
   ISurveyAvg,
   IProfessorGroup,
   IProfessorAvg,
   IGroupAvg,
   IQuestionAvg,
} from '@/interfaces/coordinator';

export abstract class ICoordinatorApi {
   abstract getSurveyAvgByCareer(idCareer: number): Promise<ISurveyAvg[]>;

   abstract getGroupsByProfesor(
      idProfessor: number,
   ): Promise<IProfessorGroup[]>;

   abstract getProfesorsAvgByPeriod(idPeriod: number): Promise<IProfessorAvg[]>;

   abstract getGroupAvgByCarrer(idCareer: number): Promise<IGroupAvg[]>;

   abstract getQuestionAvgByGroup(idGroup: number): Promise<IQuestionAvg[]>;
}
