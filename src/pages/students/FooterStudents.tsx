import React, { useState } from 'react';

const FooterStudents = () => {
   const [mostrandoModal, setMostrandoModal] = useState(false);

   const mostrarModal = () => {
      setMostrandoModal(true);
   };

   const cerrarModal = () => {
      setMostrandoModal(false);
   };

   return (
      <div className="flex bg-white w-full">
         <div className="flex flex-col md:flex-row justify-center px-8 justify-between w-full">
            <div className="text-gray-700 py-1 lg:w-6/12 text-center text-gray-600">
               Copyright © 2022 UPQROO
            </div>
            <div
               onClick={mostrarModal}
               className="text-gray-700 py-1 lg:w-6/12 text-center text-gray-600"
            >
               Desarrollado por ...
            </div>
         </div>
         {mostrandoModal && (
            <div className="z-10 min-w-full min-h-full backdrop-blur-md bg-white/30 fixed top-0 left-0 right-0">
               <div className="w-full h-auto py-8 lg:mt-20">
                  <div className="flex flex-col w-content h-auto md:w-5/12 border border-csc bg-white m-2 md:mx-auto rounded-lg justify-between">
                     <div className="px-auto py-2 text-center text-csc font-bold rounded-t-lg text-upqroo">
                        Créditos
                     </div>
                     <div className="flex flex-col px-4 text-poli">
                        <p>
                           Desarrollado para la Universidad Politécnica de
                           Quintana Roo
                        </p>
                     </div>
                     <div className="flex flex-col px-4">
                        <div className="px-3 text-gray-800">
                           FERNANDO ABRAHAM ABAN CHI - Desarrollador Iniciador
                           <a
                              className="px-2 text-blue-800 text-2xl"
                              href="https://www.facebook.com/FernandoAAbanC?mibextid=ZbWKwL"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <i className="fab fa-facebook" />
                           </a>
                        </div>
                     </div>
                     <div className="flex flex-col px-4">
                        <div className="px-3 text-gray-800">
                           ISAAC MONTIEL SANCHEZ - Desarrollador Iniciador
                           <a
                              className="px-2 text-blue-800 text-2xl"
                              href="https://www.facebook.com/profile.php?id=100072882848876&mibextid=ZbWKwL"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <i className="fab fa-facebook" />
                           </a>
                           <a
                              className="px-2 text-pink-800 text-2xl"
                              href="https://www.instagram.com/isaac.mtsz/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <i className="fab fa-instagram" />
                           </a>
                        </div>
                     </div>
                     <div className="rounded-b-lg flex justify-end rounded-b-lg py-3 px-2 space-x-6">
                        <button
                           onClick={cerrarModal}
                           className="px-4 py-2 text-center text-gray-600 bg-slate-200 rounded-md"
                        >
                           Cerrar
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default FooterStudents;
