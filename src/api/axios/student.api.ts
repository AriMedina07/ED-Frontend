import { IStudent } from '@/interfaces/student';
import { IStudentApi } from '../interfaces';

export class AxiosStudentApi extends IStudentApi {
   getStudents(): Promise<IStudent[]> {
      return Promise.resolve([]);
   }
}
