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

export interface ISurveyData {
   answers: IAnswer[];
   survey_version: number;
   comment: string | null;
}

interface IAnswer {
   questionId: number;
   value: number;
}

export interface IRawProfessorStudent {
   id_periodo: number;
   id_curso: number;
   id_encuesta: number;
   id_materia: number;
   nombre_materia: string;
   clave_grupo: string;
   nombre_corto_materia: string;
   id_docente: number;
   nombre: string;
   apellido_materno: string;
   apellido_paterno: string;
   nombre_carrera: string;
}

export type IProfessorStudent = {
   idPeriod: IRawProfessorStudent['id_periodo'];
   idCourse: IRawProfessorStudent['id_curso'];
   idSurvey: IRawProfessorStudent['id_encuesta'];
   idSubject: IRawProfessorStudent['id_materia'];
   subjectName: IRawProfessorStudent['nombre_materia'];
   groupKey: IRawProfessorStudent['clave_grupo'];
   subjectKey: IRawProfessorStudent['nombre_corto_materia'];
   idProfessor: IRawProfessorStudent['id_docente'];
   name: IRawProfessorStudent['nombre'];
   maternalSurname: IRawProfessorStudent['apellido_materno'];
   paternalSurname: IRawProfessorStudent['apellido_paterno'];
   careerName: IRawProfessorStudent['nombre_carrera'];
};

export interface IRawIQuestionQuestionnaire {
   id_pregunta: number;
   id_cuestionario_ad: number;
   pregunta: string;
}

export type IQuestionQuestionnaire = {
   idQuestion: IRawIQuestionQuestionnaire['id_pregunta'];
   idQuestionnaire: IRawIQuestionQuestionnaire['id_cuestionario_ad'];
   title: IRawIQuestionQuestionnaire['pregunta'];
};
