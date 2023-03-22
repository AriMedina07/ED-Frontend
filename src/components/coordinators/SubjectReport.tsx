const SubjectReport = () => (
   <div className="w-full">
      <div className="flex flex-col lg:flex-row w-full lg:justify-evenly bg-slate-50 rounded shadow-lg my-2">
         <div className="flex w-full mx-4 p-4">
            <select
               className="text-xs text-gray-700 w-full rounded p-2 border border-poli cursor-pointer font-semibold"
               //  ref="seleccionado"
               //  @change="cargarDocentes"
               //  v-model="periodo"
            >
               <option value="periodo">Periodos</option>
               {/* <option v-for="pdo in listaPeriodos" :key="pdo.id" :value="pdo.id">
             {{ pdo.periodo }}
           </option> */}
            </select>
         </div>
         <div className="flex w-full mx-4 p-4">
            <select
               className="text-xs text-gray-700 w-full rounded p-2 border border-poli cursor-pointer font-semibold"
               //  ref="seleccionado"
               //  @change="cargarMaterias"
               //  v-model="docente"
            >
               <option value="docente">Docente</option>
               <option
                  v-for="docente in listaDocente"
                  // :key="docente.id"
                  // :value="docente.id"
               >
                  {/* {{ docente.nombre }} {{ docente.apellido_paterno }}
             {{ docente.apellido_materno }} */}
               </option>
            </select>
         </div>
         <div className="flex w-full mx-4 p-4">
            <select
               className="text-xs text-gray-700 w-full rounded p-2 border border-poli cursor-pointer font-semibold"
               //  ref="seleccionado"
               //  @change="cargarGrupos"
               //  v-model="materia"
            >
               <option value="materia">Materia</option>
               <option
                  v-for="materia in listaMaterias"
                  // :key="materia.id"
                  // :value="materia.id"
               >
                  {/* {{ materia.materia }} */}
               </option>
            </select>
         </div>
         <div className="flex w-full mx-4">
            <div className="slide">
               <div className="flex w-full mx-4">
                  <div className="text-xs text-gray-700 place-self-center px-1">
                     Grupos
                  </div>
                  <div className="flex w-full grid grid-cols-3 gap-4 py-1 content-center justify-evenly">
                     <div
                        //  v-for="(gp, index) in listaGrupos"
                        //  :key="gp.id"
                        //  :value="gp.id"
                        //  @click="ocultarGrupo(index)"
                        //  :className="{
                        //    'bg-green-600': this.vistaGrupos[index] == true,
                        //    'bg-gray-400': this.vistaGrupos[index] == false,
                        //  }"
                        className="border text-white py-1 text-center text-xs"
                     >
                        {/* {{ gp.grupo }} */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="w-full flex flex-col bg-slate-50 rounded shadow-lg my-2 p-3">
         <div className="w-full flex">
            <p className="w-full text-center text-md text-gray-700 py-4">
               Reporte de Evaluación Docente
            </p>
            <div
               //  v-if="this.opcionDescargaEvaluacion"
               //  @click="descargarReportePDF"
               className="flex flex-coljustify-self-end text-upqroo text-2xl content-center cursor-pointer"
            >
               <span className="text-xs">PDF</span>
               <span>
                  {/* <font-awesome-icon icon="fa-solid fa-download fa-xl" /> */}
               </span>
            </div>
         </div>

         <div className="w-full flex flex-col rounded border border-gray-300 px-3 font-sans">
            <div className="flex justify-center">
               <img
                  className="h-28 py-3"
                  alt="UPQROO logo"
                  src="@/assets/logo.png"
               />
            </div>
            <div className="flex flex-col w-full font-light py-3">
               <div className="text-xl font-semibold uppercase text-upqroo">
                  Universidad Politécnica de Quintana Roo
               </div>
               <div className="text-lg font-semibold uppercase text-poli">
                  {/* {{ this.carrera }} */}
               </div>
               <div className="text-lg font-medium">
                  {/* {{ new Date().toLocaleDateString() }} */}
               </div>
               <div className="text-lg font-medium">
                  <span className="italic">
                     {/* {{ this.docenteElegido }} */}
                  </span>
               </div>
               <div className="text-md font-medium">
                  {/* Periodo : <span className="italic"> 
             {{ this.periodoElegido }}</span> */}
               </div>
               <div className="text-md font-medium">
                  {/* Materia : <span className="italic"> {{ this.materiaElegido }}</span> */}
               </div>
               <div className="text-md font-medium">
                  {/* Grupos <span className="italic"> {{ this.gruposFiltro }}</span> */}
               </div>
            </div>
            <div className="flex flex-col w-full">
               <div
                  // v-if="this.cargandoDatosEvaluacion"
                  className="flex justify-center w-full"
               >
                  <img
                     className="w-auto"
                     alt="cargando gif"
                     src="@/assets/cargandogif.gif"
                  />
               </div>
               <div>
                  <div
                     className="border rounded border-gray-200 my-2 p-2 font-light text-sm"
                     //   v-for="(grupo, index) in this.respuestaEvaluacion"
                     //   v-show="this.vistaGrupos[index] == true"
                     //   :key="index"
                  >
                     <div className="flex my-1">Grupo</div>
                     <div className="flex my-1">Alumnos </div>
                     <div className="flex my-1">
                        {/* Promedio :
                 {{ grupo.promedio_grupo }} */}
                     </div>
                     <div className="flex my-1">
                        {/* Encuentados :
                 {{ grupo.total_encuestados }} */}
                     </div>
                     <div className="flex">
                        <p
                           className="px-2 py-1 border rounded my-1 cursor-pointer"
                           // :className="[
                           //   {
                           //     'bg-poli text-upqroo  font-semibold':
                           //       this.vistaPreguntas[index] == true,
                           //   },
                           //   {
                           //     'bg-upqroo text-white font-semibold':
                           //       this.vistaPreguntas[index] == false,
                           //   },
                           // ]"
                           // @click="maxOminPreguntas(index)"
                        >
                           {/* Preguntas
                   {{
                     grupo.preguntas != null
                       ? grupo.preguntas.length
                       : "Sin Preguntas"
                   }} */}
                        </p>
                     </div>
                     <div
                        // v-show="this.vistaPreguntas[index] == true"
                        className="flex px-2"
                     >
                        <div className="fade">
                           <div
                              className="flex flex-col divide-y"
                              //   v-show="grupo.preguntas ? true : false"
                           >
                              <div
                                 v-for="(pregunta, index) in grupo.preguntas"
                                 className="flex justify-between text-sm mt-2"
                              >
                                 <div className="flex lg:w-11/12">
                                    {/* {{ index + 1 }}.- {{ pregunta.pregunta }} */}
                                 </div>
                                 <div className="flex lg:w-1/12 items-center">
                                    <p className="align-middle" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex">
                        <p
                           className="px-2 py-1 border rounded my-1 cursor-pointer"
                           // :className="[
                           //   {
                           //     'bg-poli text-upqroo  font-semibold':
                           //       this.vistaComentarios[index] == true,
                           //   },
                           //   {
                           //     'bg-upqroo text-white font-semibold':
                           //       this.vistaComentarios[index] == false,
                           //   },
                           // ]"
                           // @click="maxOminComentarios(index)"
                        >
                           {/* Comentarios
                   {{
                     grupo.comentarios != null
                       ? grupo.comentarios.length
                       : "Sin Comentarios"
                   }} */}
                        </p>
                     </div>
                     <div
                        // v-show="this.vistaCosmentarios[index] == true"
                        className="flex px-2 my-1"
                     >
                        <div className="fade">
                           <div className="flex flex-col divide-y">
                              <div
                                 //  v-for="(comentario, index) in grupo.comentarios"
                                 //  :key="index"
                                 className="flex justify-between text-sm mt-2"
                              >
                                 <div className="flex w-full">
                                    {/* {{ index + 1 }}.- {{ comentario.comentario }} */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default SubjectReport;
