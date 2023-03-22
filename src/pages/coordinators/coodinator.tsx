const Coordinator = () => (
   <div className="flex flex-col justify-center w-full">
      <div className="flex w-full bg-slate-50 px-5 py-2 border border-b-slate-300">
         <div className="flex flex-col md:flex-row justify-between w-10/12">
            <div className="flex flex-col">
               <h4 className="leading-none h4 px-2 text-upqroo font-semibold">
                  {/* {{ nombreCoor + " " }} */} nombre
               </h4>
               <p className="leading-none text-sm px-2 text-poli font-semibold">
                  {/* {{ depto + " " }} */} depto
               </p>
            </div>
            <p className="text-lg px-2 text-upqroo font-semibold">
               {/* {{ carrera + " " }} */} carrera
            </p>
         </div>
         <div className="flex w-2/12 justify-end">
            <button
               //  @click="cerrarSesion"
               //  title="salir"
               className="rounded px-2 py-1 text-white bg-upqroo hover:bg-poli font-semibold w-8/12 text-center h-auto"
            >
               {/* <font-awesome-icon icon="fa-solid fa-right-to-bracket" /> */}
            </button>
         </div>
      </div>
      <div className="flex w-full justify-center bg-slate-50">
         <div className="flex flex-col lg:flex-row w-11/12 space-y-2 lg:space-y-0 lg:justify-evenly py-1 bg-slate-50 lg:space-x-4">
            {/* <router-link
          className="w-full lg:w-4/12 lg:text-center hover:text-white hover:bg-poli rounded px-3"
          to="/coordinador/"
          :className="{
            'bg-upqroo text-white font-semibold rounded':
              this.$route.path == '/coordinador/dashboard',
          }"
          >Estadisticos Generales</router-link
        > */}

            {/* <router-link
          className="w-full lg:w-4/12 lg:text-center hover:text-white hover:bg-poli rounded px-3"
          to="/coordinador/reporte-por-materia"
          :className="{
            'bg-upqroo text-white font-semibold rounded':
              this.$route.path == '/coordinador/reporte-por-materia',
          }"
          >Reporte por materia</router-link
        > */}

            {/* <router-link
          className="w-full lg:w-4/12 lg:text-center hover:text-white hover:bg-poli rounded px-3"
          to="/coordinador/administracion"
          :className="{
            'bg-upqroo text-white font-semibold rounded':
              this.$route.path == '/coordinador/administracion',
          }"
          >Administracion</router-link
        > */}
         </div>
      </div>
      <div className="flex w-full justify-center p-4 my-3">
         <div className="flex w-full md:w-11/12 p-2 md:p-4">
            {/* <router-view></router-view> */}
         </div>
      </div>
   </div>
);

export default Coordinator;
