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

   const handleSaveQuestions = async (professor: IProfessorStudent) => {
      const lastData = localStorage.getItem('savedQuestions');
      const savedQuestions = {
         ...professor,
         idStatus: 1,
         respuestas: { ...respuestas },
      };

      if (lastData) {
         const savedQuestionsArray = JSON.parse(lastData);
         const existingProfessor = savedQuestionsArray.find(
            (p: any) => p.professor.idProfessor === professor.idProfessor,
         );

         if (existingProfessor) {
            existingProfessor.professor.respuestas = { ...respuestas };
         } else {
            savedQuestionsArray.push(savedQuestions);
         }

         localStorage.setItem(
            'savedQuestions',
            JSON.stringify(savedQuestionsArray),
         );
      } else {
         localStorage.setItem(
            'savedQuestions',
            JSON.stringify([savedQuestions]),
         );
      }
   };

   // eslint-disable-next-line no-unused-vars
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
                        <div className="min-w-full min-h-full backdrop-blur-md bg-white/30 top-0 left-0 right-0">
                           <div className="w-full h-auto py-8 lg:mt-8">
                              <div className="flex flex-col w-content h-auto md:w-8/12 border border-csc bg-white m-2 md:mx-auto rounded-lg justify-between">
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
                                                         (prevRespuestas) => ({
                                                            ...prevRespuestas,
                                                            [key]: {
                                                               ...prevRespuestas[
                                                                  key
                                                               ],
                                                               [pregunta.idQuestion]:
                                                                  respuestaSeleccionada,
                                                            },
                                                         }),
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

                                 <div className="w-full flex justify-center my-2">
                                    <button
                                       className="bg-poli text-white px-4 py-2 rounded-md hover:bg-poli-dark focus:outline-none focus:bg-poli-dark"
                                       onClick={async () => {
                                          // Enviar respuestas
                                          console.log(
                                             'Respuestas enviadas para materia',
                                             professor.groupKey,
                                          );
                                          setMateriaVista(
                                             (prevMateriaVista) => ({
                                                ...prevMateriaVista,
                                                [key]: false,
                                             }),
                                          );
                                          await handleSaveQuestions(professor);
                                       }}
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

// // Componente padre
// import { ChildComponent } from './ChildComponent';

// function ParentComponent() {
//   const data = { name: 'John', age: 30 };

//   return (
//     <div>
//       <ChildComponent data={data} />
//     </div>
//   );
// }

// // Componente hijo
// interface Props {
//   data: { name: string, age: number };
// }

// function ChildComponent(props: Props) {
//   return (
//     <div>
//       <p>Name: {props.data.name}</p>
//       <p>Age: {props.data.age}</p>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// interface QuestionsFormProps {
//   questions: any[];
//   valorRespuesta: any[];
//   key: any;
//   professor: any;
//   respuestas: any;
//   setRespuestas: any;
//   setMateriaVista: any;
//   handleSaveQuestions: any;
// }

// const QuestionsForm: React.FC<QuestionsFormProps> = ({
//    questions,
//    valorRespuesta,
//    key,
//    professor,
//    respuestas,
//    setRespuestas,
//    setMateriaVista,
//    handleSaveQuestions,
// }) => {
//    const [isVisible, setIsVisible] = useState(false);

//    const renderQuestionsForm = () => (
//       <div className="min-w-full min-h-full backdrop-blur-md bg-white/30 top-0 left-0 right-0">
//          <div className="w-full h-auto py-8 lg:mt-8">
//             <div className="flex flex-col w-content h-auto md:w-8/12 border border-csc bg-white m-2 md:mx-auto rounded-lg justify-between">
//                <div className="w-full px-3 my-2">
//                   <p className="text-m font-medium text-gray-800">
//               Por favor, responde las siguientes preguntas:
//                   </p>
//                </div>
//                {questions.map((pregunta) => (
//                   <div
//                      key={pregunta.idQuestion}
//                      className="flex flex-col w-full p-2 border-b border-gray-400"
//                   >
//                      <div className="w-full flex flex-col md:flex-row pb-4 mx-4">
//                         <p className="text-m text-gray-800">
//                            {`${pregunta.idQuestion}. ${pregunta.title}`}
//                         </p>
//                      </div>
//                      <div className="flex items-center mx-auto mb-3">
//                         {valorRespuesta.map((respuesta) => (
//                            <label
//                               key={respuesta.valor}
//                               className="inline-flex items-center mx-5"
//                            >
//                               <input
//                                  type="radio"
//                                  className="form-radio h-4 w-4 text-poli"
//                                  name={`pregunta${pregunta.idQuestion}`}
//                                  value={respuesta.valor}
//                                  checked={
//                                     respuestas[key] &&
//                         respuestas[key][pregunta.idQuestion] === respuesta.valor
//                                  }
//                                  onChange={(e) => {
//                                     const respuestaSeleccionada = parseInt(e.target.value);
//                                     setRespuestas((prevRespuestas) => ({
//                                        ...prevRespuestas,
//                                        [key]: {
//                                           ...prevRespuestas[key],
//                                           [pregunta.idQuestion]: respuestaSeleccionada,
//                                        },
//                                     }));
//                                  }}
//                               />
//                               <span className="ml-2 text-m text-gray-700">
//                                  {`${respuesta.valor} - ${respuesta.texto}`}
//                               </span>
//                            </label>
//                         ))}
//                      </div>
//                   </div>
//                ))}

//                <div className="w-full flex justify-center my-2">
//                   <button
//                      className="bg-poli text-white px-4 py-2 rounded-md hover:bg-poli-dark focus:outline-none focus:bg-poli-dark"
//                      onClick={async () => {
//                         // Enviar respuestas
//                         console.log(
//                            'Respuestas enviadas para materia',
//                            professor.groupKey,
//                         );
//                         setMateriaVista((prevMateriaVista) => ({
//                            ...prevMateriaVista,
//                            [key]: false,
//                         }));
//                         await handleSaveQuestions(professor);
//                         setIsVisible(false);
//                      }}
//                   >
//                   Enviar
//                   </button>
//                </div>
//             </div>
//          </div>
//       </div>
//    );

//    return (
//       <>
//          <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             onClick={() => setIsVisible(!isVisible)}
//          >
//                   Mostrar formulario
//          </button>
//          {isVisible && renderQuestionsForm()}
//       </>
//    );
// };

// export default QuestionsForm;
