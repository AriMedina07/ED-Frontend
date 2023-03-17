import React, { useState } from 'react';

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
   const [evaluaConf] = useState<EvaluacionConfig>({
      materias: [],
      preguntas: [],
   });
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

   return (
      <React.Fragment>
         <div className="w-full flex">
            <div className="flex flex-col lg:flex-row w-full lg:justify-evenly bg-slate-50 rounded shadow-lg my-2">
               {evaluaConf.materias.map((materia, key) => (
                  <div
                     key={key}
                     className={`flex flex-col border rounded text-gray-800 p-2 my-5 mx-4 ${
                        materia.status_encuesta
                           ? 'border-poli'
                           : 'border-upqroo'
                     }`}
                  >
                     <div className="w-full flex flex-col md:flex-row sm:items-center">
                        <div className="w-full lg:w-3/12 flex items-center">
                           <img
                              className="w-auto h-16"
                              alt="UPQROO logo"
                              src="./logo.png"
                           />
                        </div>
                        <div className="w-full lg:w-6/12 text-sm content-around flex">
                           <div className="w-full">
                              <div className="w-full">
                                 <p className="text-xs text-gray-600">
                                    Materia:
                                 </p>
                                 <p className="px-3 w-full text-upqroo">
                                    {`${materia.materia} - [${materia.clave}]`}
                                 </p>
                              </div>
                              <div className="w-full">
                                 <p className="text-xs text-gray-600">
                                    Docente:
                                 </p>
                                 <p className="px-3 w-full text-upqroo">
                                    {`${materia.nombre} ${materia.apellido_paterno} ${materia.apellido_materno}`}
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="w-full lg:w-3/12 flex items-center my-4">
                           {!materia.status_encuesta ? (
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
                           {evaluaConf.preguntas.map((pregunta) => (
                              <div
                                 key={pregunta.id}
                                 className="w-full px-3 py-2 border-b flex items-center justify-between"
                              >
                                 <p className="text-sm text-gray-800">
                                    {`${pregunta.id}. ${pregunta.pregunta}`}
                                 </p>
                                 <select
                                    className="w-32 h-8 text-gray-700 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-poli focus:ring-1 focus:ring-poli"
                                    value={
                                       respuestas[key] &&
                                       respuestas[key][pregunta.id]
                                          ? respuestas[key][
                                               pregunta.id
                                            ].toString()
                                          : ''
                                    }
                                    onChange={(e) => {
                                       const respuestaSeleccionada = parseInt(
                                          e.target.value,
                                       );
                                       setRespuestas((prevRespuestas) => ({
                                          ...prevRespuestas,
                                          [key]: {
                                             ...prevRespuestas[key],
                                             [pregunta.id]:
                                                respuestaSeleccionada,
                                          },
                                       }));
                                    }}
                                 >
                                    <option value="" disabled>
                                       Seleccione una respuesta
                                    </option>
                                    {[1, 2, 3, 4, 5].map((respuesta) => (
                                       <option
                                          key={respuesta}
                                          value={respuesta}
                                       >
                                          {respuesta}
                                       </option>
                                    ))}
                                 </select>
                              </div>
                           ))}
                           <div className="w-full flex justify-center my-2">
                              <button
                                 className="bg-poli text-white px-4 py-2 rounded-md hover:bg-poli-dark focus:outline-none focus:bg-poli-dark"
                                 onClick={() => {
                                    // Enviar respuestas
                                    console.log(
                                       'Respuestas enviadas para materia',
                                       materia.clave,
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
