import { IProfessor } from '@/interfaces/professor';
import { IProfessorApi } from '../interfaces';

export class AxiosProfessorApi extends IProfessorApi {
   getProfessors(): Promise<IProfessor[]> {
      return Promise.resolve([]);
   }
}
