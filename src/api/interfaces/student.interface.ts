/* eslint-disable no-unused-vars */
import {
   IStudent,
   ISurveyData,
   IProfessorStudent,
   IQuestionQuestionnaire,
} from '@/interfaces/student';

export abstract class IStudentApi {
   abstract getStudentsByGroup(idGroup: number): Promise<IStudent[]>;

   abstract saveSurveyData(
      idSurvey: number,
      surveyData: ISurveyData,
   ): Promise<number | never[]>;

   abstract getProfessorByStudent(
      key: number,
      idPeriod: number,
   ): Promise<IProfessorStudent[]>;

   abstract getQuestionsByQuestionnaire(
      idQuestionnaire: number,
   ): Promise<IQuestionQuestionnaire[]>;
}
