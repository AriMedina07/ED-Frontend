/* eslint-disable no-unused-vars */
import { IStudent } from '@/interfaces/student';

export abstract class IStudentApi {
   abstract getStudentsByGroup(idGroup: number): Promise<IStudent[]>;
}
