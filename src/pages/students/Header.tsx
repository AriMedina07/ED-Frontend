import React from 'react';

type Props = {
   nombreAlum: string;
   matricula: string;
   cerrarSesion: () => void;
   periodo: { periodo: string } | null;
};

const Students: React.FC<Props> = ({
   nombreAlum,
   matricula,
   cerrarSesion,
   periodo,
}) => (
   <React.Fragment>
      <div className="flex w-full bg-slate-50 px-5 py-2 border border-b-slate-300">
         <div className="flex flex-col md:flex-row justify-between w-10/12">
            <div className="flex flex-col">
               <h4 className="leading-5 h4 px-2 font-semibold text-upqroo">
                  {`${nombreAlum} `}
               </h4>
               <p className="leading-5 text-sm px-2 font-semibold text-poli">
                  {`${matricula} `}
               </p>
            </div>
            <p className="text-lg px-2">{/* Placeholder */}</p>
         </div>
         <div className="flex w-2/12 justify-end">
            <button
               onClick={cerrarSesion}
               className="border rounded border-upqroo px-6 py-1 text-upqroo hover:bg-upqroo hover:text-white"
            >
               Salir
            </button>
         </div>
      </div>
      <div className="flex w-full justify-center bg-slate-50">
         <div className="flex w-11/12 justify-evenly py-1 w-full bg-slate-50">
            <p className="px-3 text-md text-upqroo">
               Evaluación Docente {periodo?.periodo ?? ''}
            </p>
         </div>
      </div>
   </React.Fragment>
);

const HeaderStudents = () => (
   <Students
      nombreAlum="Juan Homofobico Villar"
      matricula="123456"
      cerrarSesion={() => console.log('Cerrar sesión')}
      periodo={{ periodo: '2022-2023' }}
   />
);
export default HeaderStudents;
