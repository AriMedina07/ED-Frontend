import {
   IProfessorStudent,
   IQuestionQuestionnaire,
   ISurveyData,
} from '@/interfaces/student';
import React, { useState, useEffect } from 'react';
import { studentApi } from '../../api/index';
import logo from './logo.png';

interface answers {
   [key: string]: {
      [key: number]: number;
      comentario: string;
   };
}

const TeachersList = () => {
   const [professors, setProfessors] = useState<IProfessorStudent[]>([]);
   const [questions, setQuestions] = useState<IQuestionQuestionnaire[]>([]);
   const [materiaVista, setMateriaVista] = useState<Record<number, boolean>>(
      {},
   );
   const [respuestas, setRespuestas] = useState<answers>({});

   const mostrarPreguntas = (key: number) => {
      setMateriaVista((prevMateriaVista) => ({
         ...prevMateriaVista,
         [key]: true,
      }));
   };

   const closeModal = (key: number) => {
      setMateriaVista((prevMateriaVista) => ({
         ...prevMateriaVista,
         [key]: false,
      }));
   };

   useEffect(() => {
      (async () => {
         setProfessors(await studentApi.getProfessorByStudent(202000074));
         setQuestions(await studentApi.getQuestionsByQuestionnaire());
         setRespuestas(() => {
            // cargar respuestas guardadas
            const savedQuestions = localStorage.getItem('savedQuestions');
            if (savedQuestions && savedQuestions?.length > 0) {
               const savedQuestionsArray = JSON.parse(savedQuestions);
               return savedQuestionsArray;
            }
            return [];
         });
      })();
   }, []);

   const valorRespuesta = [
      { valor: 1, texto: 'Malo' },
      { valor: 2, texto: 'Deficiente' },
      { valor: 3, texto: 'Regular' },
      { valor: 4, texto: 'Bueno' },
      { valor: 5, texto: 'Excelente' },
   ];

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
                        <div className="min-w-full min-h-full backdrop-blur-md bg-white/30 absolute overflow-auto top-0 left-0 right-0">
                           <div className="w-full h-auto py-8 lg:mt-8">
                              <div className="flex flex-col w-content h-auto md:w-8/12 border border-csc bg-white m-2 md:mx-auto rounded-lg justify-between">
                                 <div className="flex justify-between px-3 my-2">
                                    <p className="text-m inline-flex font-medium text-gray-800">
                                       Nombre del docente:{' '}
                                       {`${professor.name} ${professor.paternalSurname} ${professor.maternalSurname}`}
                                    </p>
                                    <span
                                       className="text-3xl inline-flex text-gray-600 hover:text-red-500 transform transition duration-50 hover:scale-110 cursor-pointer"
                                       onClick={() => closeModal(key)}
                                    >
                                       &times;
                                    </span>
                                 </div>
                                 <div className="w-full px-3 my-2">
                                    <p className="text-m font-medium text-gray-800">
                                       Por favor, responde las siguientes
                                       preguntas:
                                    </p>
                                 </div>
                                 {questions.map((pregunta) => (
                                    <div
                                       key={pregunta.idQuestion}
                                       className="flex flex-col w-full p-2 border-b border-gray-400"
                                    >
                                       <div className="w-full flex flex-col md:flex-row pb-4 mx-4">
                                          <p className="text-m text-gray-800">
                                             {`${pregunta.idQuestion}. ${pregunta.title}`}
                                          </p>
                                       </div>
                                       <div className="flex items-center mx-auto mb-3">
                                          {valorRespuesta.map((respuesta) => (
                                             <label
                                                key={respuesta.valor}
                                                className="inline-flex items-center mx-5"
                                             >
                                                <input
                                                   type="radio"
                                                   className="form-radio h-4 w-4 text-poli"
                                                   name={`pregunta${pregunta.idQuestion}`}
                                                   value={respuesta.valor}
                                                   checked={
                                                      respuestas[key] &&
                                                      respuestas[key][
                                                         pregunta.idQuestion
                                                      ] === respuesta.valor
                                                   }
                                                   onChange={(e) => {
                                                      const respuestaSeleccionada =
                                                         parseInt(
                                                            e.target.value,
                                                         );
                                                      setRespuestas(
                                                         (prevRespuestas) => {
                                                            const updatedRespuestas =
                                                               {
                                                                  ...prevRespuestas,
                                                                  [key]: {
                                                                     ...prevRespuestas[
                                                                        key
                                                                     ],
                                                                     [pregunta.idQuestion]:
                                                                        respuestaSeleccionada,
                                                                  },
                                                               };
                                                            localStorage.setItem(
                                                               'savedQuestions',
                                                               JSON.stringify(
                                                                  updatedRespuestas,
                                                               ),
                                                            );
                                                            return updatedRespuestas;
                                                         },
                                                      );
                                                   }}
                                                />
                                                <span className="ml-2 text-m text-gray-700">
                                                   {`${respuesta.valor} - ${respuesta.texto}`}
                                                </span>
                                             </label>
                                          ))}
                                       </div>
                                    </div>
                                 ))}
                                 <div className="flex-col px-5 text-gray-700">
                                    <p>Comentario :</p>
                                    <textarea
                                       name={`comentario${key}`}
                                       id=""
                                       className="w-full p-1 text-sm text-gray-800 border-2 border-gray-500 rounded"
                                       onChange={(e) =>
                                          setRespuestas((prevRespuestas) => {
                                             const updatedRespuestas = {
                                                ...prevRespuestas,
                                                [key]: {
                                                   ...prevRespuestas[key],
                                                   comentario: e.target.value,
                                                },
                                             };
                                             localStorage.setItem(
                                                'savedQuestions',
                                                JSON.stringify(
                                                   updatedRespuestas,
                                                ),
                                             );
                                             return updatedRespuestas;
                                          })
                                       }
                                       value={
                                          respuestas[key] &&
                                          respuestas[key].comentario
                                       }
                                    />
                                 </div>

                                 <div className="w-full flex justify-center my-2">
                                    <button
                                       className="bg-polibr text-white px-4 py-2 rounded-md transform transition duration-50 hover:scale-110 mr-10"
                                       onClick={() => closeModal(key)}
                                    >
                                       Cancelar
                                    </button>
                                    <button
                                       className="bg-polib text-white px-4 py-2 rounded-md transform transition duration-50 hover:scale-110"
                                       onClick={async () => {
                                          setMateriaVista(
                                             (prevMateriaVista) => ({
                                                ...prevMateriaVista,
                                                [key]: false,
                                             }),
                                          );
                                          // hacer la peticion para guardar las respuestas en la base de datos
                                          // eslint-disable-next-line no-unused-vars
                                          const {
                                             comentario,
                                             ...respuestasGuardadas
                                          } = respuestas[key];

                                          const respuestasGuardadasArray =
                                             Object.keys(
                                                respuestasGuardadas,
                                             ).map((key) => ({
                                                questionId: parseInt(key),
                                                value: Number(
                                                   respuestasGuardadas[
                                                      key as any
                                                   ],
                                                ),
                                             }));
                                          const loadData: ISurveyData = {
                                             answers: respuestasGuardadasArray,
                                             survey_version: 1,
                                          };
                                          studentApi.saveSurveyData(
                                             professor.idSurvey,
                                             loadData,
                                          );
                                       }}
                                       disabled={
                                          !respuestas[key] ||
                                          Object.keys(respuestas[key]).length <
                                             questions.length
                                       }
                                    >
                                       Enviar
                                    </button>
                                 </div>
                              </div>
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
