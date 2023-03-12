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
