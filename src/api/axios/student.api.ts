/* eslint-disable no-console */
import { IStudent, IRawStudent } from '@/interfaces/student';
import { API_URL } from '@/utils/apiUrl';
import axios from 'axios';
import { IStudentApi } from '../interfaces';

export class AxiosStudentApi extends IStudentApi {
   async getStudentsByGroup(idGroup: number): Promise<IStudent[]> {
      const response: IRawStudent[] = await axios
         .get(`${API_URL}/coordinator/student/list/${idGroup}`)
         .then((res) => res.data)
         .catch((err) => {
            console.log(err);
            return [];
         });

      const students: IStudent[] = response.map((student) => ({
         idPeriod: student.id_periodo,
         careerName: student.nombre_carrera,
         groupKey: student.clave_grupo,
         key: student.matricula_alumno,
         name: student.nombre,
         maternalSurname: student.apellido_materno,
         paternalSurname: student.apellido_paterno,
      }));

      return students;
   }
}
