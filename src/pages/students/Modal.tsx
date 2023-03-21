import React from 'react';

interface Props {
   isOpen: boolean;
   onClose: () => void;
   key: number;
   questions: any[];
   valorRespuesta: any[];
   respuestas: Record<number, number[]>;
   setRespuestas: React.Dispatch<
      React.SetStateAction<Record<number, number[]>>
   >;
   // eslint-disable-next-line no-unused-vars
   handleSaveQuestions: (professor: any) => void;
   professor: any;
}

const Modal: React.FC<Props> = ({
   isOpen,
   onClose,
   key,
   questions,
   valorRespuesta,
   respuestas,
   setRespuestas,
   handleSaveQuestions,
   professor,
}) => {
   if (!isOpen) {
      return null;
   }

   return (
      <div className="min-w-full min-h-full backdrop-blur-md bg-white/30 top-0 left-0 right-0">
         <div className="w-full h-auto py-8 lg:mt-8">
            <div className="flex flex-col w-content h-auto md:w-8/12 border border-csc bg-white m-2 md:mx-auto rounded-lg justify-between">
               <div className="w-full px-3 my-2">
                  <p className="text-m font-medium text-gray-800">
                     Por favor, responde las siguientes preguntas:
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
                                    respuestas[key][pregunta.idQuestion] ===
                                       respuesta.valor
                                 }
                                 onChange={(e) => {
                                    const respuestaSeleccionada = parseInt(
                                       e.target.value,
                                    );
                                    setRespuestas((prevRespuestas) => ({
                                       ...prevRespuestas,
                                       [key]: {
                                          ...prevRespuestas[key],
                                          [pregunta.idQuestion]:
                                             respuestaSeleccionada,
                                       },
                                    }));
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
                        await handleSaveQuestions(professor);
                        onClose();
                     }}
                  >
                     Enviar
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
