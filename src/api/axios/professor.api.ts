import { IProfessor } from '@interfaces/professor';
import { IProfessorApi } from '../interfaces';

export class AxiosProfessorApi extends IProfessorApi {
   getProfessors(): Promise<IProfessor[]> {
      const text = 'pruebita ' + `itzel${1}`;
      console.log(text);
      return Promise.resolve([]);
   }
}
