export interface IRawStudent {
   id_periodo: number;
   nombre_carrera: string;
   clave_grupo: string;
   matricula_alumno: number;
   nombre: string;
   apellido_materno: string;
   apellido_paterno: string;
}

export type IStudent = {
   idPeriod: IRawStudent['id_periodo'];
   careerName: IRawStudent['nombre_carrera'];
   groupKey: IRawStudent['clave_grupo'];
   key: IRawStudent['matricula_alumno'];
   name: IRawStudent['nombre'];
   maternalSurname: IRawStudent['apellido_materno'];
   paternalSurname: IRawStudent['apellido_paterno'];
};
