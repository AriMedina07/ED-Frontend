import { IProfessor } from '@interfaces/professor';
import { IProfessorApi } from '../interfaces';

export class AxiosProfessorApi extends IProfessorApi {
   getProfessors(): Promise<IProfessor[]> {
      console.log('pruebita itzel');
      return Promise.resolve([]);
   }
}
