import { IStudent } from '../../interfaces/student';

export abstract class StudentApi {
   abstract getStudents(): Promise<IStudent[]>;
}
