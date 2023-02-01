import { IStudent } from '../../interfaces/student';
import { StudentApi } from '../interfaces';

export class AxiosStudentApi extends StudentApi {
   getStudents(): Promise<IStudent[]> {
      console.log('pruebita diego');
      return Promise.resolve([]);
   }
}
