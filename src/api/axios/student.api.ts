import { IStudent } from '../../interfaces/student';
import { IStudentApi } from '../interfaces';

export class AxiosStudentApi extends IStudentApi {
   getStudents(): Promise<IStudent[]> {
      console.log('pruebita diego');
      return Promise.resolve([]);
   }
}
