import {
   IProfessorStudent,
   IQuestionQuestionnaire,
} from '@/interfaces/student';
import React, { useState, useEffect } from 'react';
import { studentApi } from '../../api/index';
import logo from './logo.png';

interface Materia {
   clave: string;
   nombre: string;
   apellido_paterno: string;
   apellido_materno: string;
   materia: string;
   status_encuesta: boolean;
}

interface Pregunta {
   id: number;
   pregunta: string;
}

interface EvaluacionConfig {
   materias: Materia[];
   preguntas: Pregunta[];
}

const TeachersList = () => {
   // eslint-disable-next-line no-unused-vars
   const [evaluaConf] = useState<EvaluacionConfig>({
      materias: [],
      preguntas: [],
   });
   const [professors, setProfessors] = useState<IProfessorStudent[]>([]);
   const [questions, setQuestions] = useState<IQuestionQuestionnaire[]>([]);
   const [materiaVista, setMateriaVista] = useState<Record<number, boolean>>(
      {},
   );
   const [respuestas, setRespuestas] = useState<Record<number, number[]>>({});

   const mostrarPreguntas = (key: number) => {
      setMateriaVista((prevMateriaVista) => ({
         ...prevMateriaVista,
         [key]: true,
      }));
   };

   useEffect(() => {
      (async () => {
         setProfessors(await studentApi.getProfessorByStudent(202000074));
         setQuestions(await studentApi.getQuestionsByQuestionnaire());
      })();
   }, []);

   return (
      <React.Fragment>
         <div className="w-full flex">
            <div className="flex flex-col lg:flex-column w-full lg:justify-evenly bg-slate-50 rounded shadow-lg my-2">
               {professors.map((professor, key: number) => (
                  <div
                     key={key}
                     className={`flex flex-col border rounded text-gray-800 p-2 my-5 mx-4 ${
                        false ? 'border-poli' : 'border-upqroo'
                     }`}
                  >
                     <div className="w-full flex flex-col md:flex-row sm:items-center">
                        <div className="w-full lg:w-3/12 flex items-center">
                           <img
                              className="w-auto h-16"
                              alt="UPQROO logo"
                              src={logo}
                           />
                        </div>
                        <div className="w-full lg:w-6/12 text-sm content-around flex">
                           <div className="w-full">
                              <div className="w-full">
                                 <p className="text-xs text-gray-600">
                                    Materia:
                                 </p>
                                 <p className="px-3 w-full text-upqroo">
                                    {`${professor.subjectName} - [${professor.idProfessor}]`}
                                 </p>
                              </div>
                              <div className="w-full">
                                 <p className="text-xs text-gray-600">
                                    Docente:
                                 </p>
                                 <p className="px-3 w-full text-upqroo">
                                    {`${professor.name} ${professor.paternalSurname} ${professor.maternalSurname}`}
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="w-full lg:w-3/12 flex items-center my-4">
                           {true ? (
                              <button
                                 className={`px-2 py-2 hover:bg-poli hover:text-white border rounded hover:border-poli w-full ${
                                    materiaVista[key]
                                       ? 'bg-poli text-white border-poli'
                                       : 'text-upqroo border-upqroo'
                                 }`}
                                 onClick={() => mostrarPreguntas(key)}
                              >
                                 Evaluar
                              </button>
                           ) : (
                              <p className="p-2 bg-poli text-white border rounded border-poli w-full text-sm font-bold">
                                 Completado, las respuestas ya fueron enviadas.
                              </p>
                           )}
                        </div>
                     </div>
                     {materiaVista[key] && (
                        <div className="w-full flex flex-col">
                           <div className="w-full px-3 my-2">
                              <p className="text-sm font-medium text-gray-800">
                                 Por favor, responde las siguientes preguntas:
                              </p>
                           </div>
                           {questions.map((pregunta) => (
                              <div
                                 key={pregunta.idQuestion}
                                 className="w-full px-3 py-2 border-b flex items-center justify-between"
                              >
                                 <p className="text-sm text-gray-800">
                                    {`${pregunta.idQuestion}. ${pregunta.title}`}
                                 </p>
                                 <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((respuesta) => (
                                       <label
                                          key={respuesta}
                                          className="inline-flex items-center mx-2"
                                       >
                                          <input
                                             type="radio"
                                             className="form-radio h-4 w-4 text-poli"
                                             name={`pregunta${pregunta.idQuestion}`}
                                             value={respuesta}
                                             checked={
                                                respuestas[key] &&
                                                respuestas[key][
                                                   pregunta.idQuestion
                                                ] === respuesta
                                             }
                                             onChange={(e) => {
                                                const respuestaSeleccionada =
                                                   parseInt(e.target.value);
                                                setRespuestas(
                                                   (prevRespuestas) => ({
                                                      ...prevRespuestas,
                                                      [key]: {
                                                         ...prevRespuestas[key],
                                                         [pregunta.idQuestion]:
                                                            respuestaSeleccionada,
                                                      },
                                                   }),
                                                );
                                             }}
                                          />
                                          <span className="ml-2 text-gray-700">
                                             {respuesta}
                                          </span>
                                       </label>
                                    ))}
                                 </div>
                              </div>
                           ))}

                           <div className="w-full flex justify-center my-2">
                              <button
                                 className="bg-poli text-white px-4 py-2 rounded-md hover:bg-poli-dark focus:outline-none focus:bg-poli-dark"
                                 onClick={() => {
                                    // Enviar respuestas
                                    console.log(
                                       'Respuestas enviadas para materia',
                                       professor.groupKey,
                                    );
                                    setMateriaVista((prevMateriaVista) => ({
                                       ...prevMateriaVista,
                                       [key]: false,
                                    }));
                                 }}
                              >
                                 Enviar
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </React.Fragment>
   );
};

export default TeachersList;
