import { IProfessor } from '../../interfaces/professor';
import { ProfessorApi } from '../interfaces';

export class AxiosProfessorApi extends ProfessorApi {
   getProfessors(): Promise<IProfessor[]> {
      console.log('pruebita itzel');
      return Promise.resolve([]);
   }
}
