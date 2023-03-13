export interface IRawSurveyAvg {
   id_periodo: number;
   clave_grupo: string;
   nombre_materia: string;
   nombre_carrera: string;
   nombre_corto: string;
   promedio_puntuacion: number;
}

export type ISurveyAvg = {
   idPeriod: IRawSurveyAvg['id_periodo'];
   groupKey: IRawSurveyAvg['clave_grupo'];
   subjectName: IRawSurveyAvg['nombre_materia'];
   careerName: IRawSurveyAvg['nombre_carrera'];
   careerKey: IRawSurveyAvg['nombre_corto'];
   avgScore: IRawSurveyAvg['promedio_puntuacion'];
};

export interface IRawProfessorGroup {
   id_docente: number;
   id_periodo: number;
   clave_grupo: string;
   nombre_materia: string;
   nombre: string;
   apellido_materno: string;
   apellido_paterno: string;
   promedio_puntuacion: number;
}

export type IProfessorGroup = {
   idProfessor: IRawProfessorGroup['id_docente'];
   idPeriod: IRawProfessorGroup['id_periodo'];
   groupKey: IRawProfessorGroup['clave_grupo'];
   subjectName: IRawProfessorGroup['nombre_materia'];
   name: IRawProfessorGroup['nombre'];
   maternalSurname: IRawProfessorGroup['apellido_materno'];
   paternalSurname: IRawProfessorGroup['apellido_paterno'];
   avgScore: IRawProfessorGroup['promedio_puntuacion'];
};

export interface IRawProfessorAvg {
   id_periodo: number;
   clave_grupo: string;
   nombre_materia: string;
   nombre_carrera: string;
   nombre: string;
   apellido_materno: string;
   apellido_paterno: string;
   promedio_puntuacion: string;
}

export type IProfessorAvg = {
   idPeriod: IRawProfessorAvg['id_periodo'];
   groupKey: IRawProfessorAvg['clave_grupo'];
   subjectName: IRawProfessorAvg['nombre_materia'];
   careerName: IRawProfessorAvg['nombre_carrera'];
   name: IRawProfessorAvg['nombre'];
   maternalSurname: IRawProfessorGroup['apellido_materno'];
   paternalSurname: IRawProfessorGroup['apellido_paterno'];
   avgScore: IRawProfessorAvg['promedio_puntuacion'];
};

export interface IRawGroupAvg {
   id_periodo: number;
   clave_grupo: string;
   nombre_carrera: string;
   promedio_puntuacion: number;
}

export type IGroupAvg = {
   idPeriod: IRawGroupAvg['id_periodo'];
   groupKey: IRawGroupAvg['clave_grupo'];
   careerName: IRawGroupAvg['nombre_carrera'];
   avgScore: IRawGroupAvg['promedio_puntuacion'];
};

export interface IRawQuestionAvg {
   id_periodo: number;
   id_pregunta: number;
   pregunta: string;
   id_cuestionario_ad: number;
   clave_grupo: string;
   promedio_puntuacion: number;
}

export type IQuestionAvg = {
   idPeriod: IRawQuestionAvg['id_periodo'];
   idQuestion: IRawQuestionAvg['id_pregunta'];
   title: IRawQuestionAvg['pregunta'];
   idQuestionnaire: IRawQuestionAvg['id_cuestionario_ad'];
   groupKey: IRawQuestionAvg['clave_grupo'];
   avgScore: IRawQuestionAvg['promedio_puntuacion'];
};
