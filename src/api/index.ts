import {
   AxiosCoordinatorApi,
   AxiosProfessorApi,
   AxiosStudentApi,
} from './axios';

export const professorApi = new AxiosProfessorApi();
export const studentApi = new AxiosStudentApi();
export const coordinatorApi = new AxiosCoordinatorApi();
