import { IStudent } from '@/interfaces/student';

export abstract class IStudentApi {
   abstract getStudents(): Promise<IStudent[]>;
}
