/* eslint-disable no-unused-vars */
import { ISurveyAvg } from '@/interfaces/coordinator';

export abstract class ICoordinatorApi {
   abstract getSurveyAvgByCareer(idCareer: number): Promise<ISurveyAvg[]>;
}
