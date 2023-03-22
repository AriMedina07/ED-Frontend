const GeneralStats = () => (
   <div className="w-full">
      <div className="flex flex-col w-full md:px-4 py-2 my-1 border border-gray-200 rounded bg-slate-50 rounded shadow-lg">
         <h4 className="text-gray-700 text-center py-2">
            Indices Generales de la carrera
         </h4>
         <div className="flex flex-col md:flex-row justify-between w-full px-2 md:px-4 rounded">
            <p className="text-sm text-gray-800">Periodos totales </p>
            <p className="text-sm text-gray-800">Materias totales </p>
            <p className="text-sm text-gray-800">Docentes totales </p>
         </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:justify-evenly bg-slate-50 rounded shadow-lg my-2">
         <div className="flex w-full mx-4 p-4">
            <select
               //   :disabled="this.cargandoDatosEvaluacion"
               className="text-xs text-gray-700 w-full rounded p-2 border border-poli cursor-pointer font-semibold"
               // ref="seleccionado"
               //   @change="cargarDatosReporte"
               // v-model="periodo"
            >
               <option value="periodo">Periodos</option>
               {/* <option v-for="pdo in listaPeriodos">
                      {{ pdo.periodo }}
                   </option> */}
            </select>
         </div>
         <div className="flex w-full mx-4 p-4">
            <div
               // v-if="!this.cargandoDatosEvaluacion && false"
               className="w-full"
            >
               <select
                  className="text-xs text-gray-700 w-full border rounded p-2"
                  // ref="seleccionado"
                  // @change="cargarMaterias"
                  // v-model="docente"
               >
                  <option value="docente">Docente</option>
                  <option
                  // v-for="docente in listaDocente"
                  //   :key="docente.id"
                  //   :value="docente.id"
                  >
                     {/* {{ docente.nombre }} {{ docente.apellido_paterno }}
               {{ docente.apellido_materno }} */}
                  </option>
               </select>
            </div>
         </div>
      </div>
      <div className="w-full flex flex-col bg-slate-50 rounded shadow-lg my-2 p-3">
         <div className="w-full flex">
            <p className="w-full text-center text-md text-gray-700 py-4">
               Reporte de Evaluación Docente
            </p>
            <div
               // v-show="this.opcionDescargaEvaluacion || this.reporteGeneral"
               //   @click="descargarReportePDF"
               className="flex flex-coljustify-self-end text-upqroo text-2xl content-center cursor-pointer"
            >
               <span className="text-xs">PDF</span>
               {/* <span><font-awesome-icon icon="fa-solid fa-download fa-xl" /></span> */}
            </div>
         </div>

         <div className="w-full flex flex-col rounded border border-gray-300 px-3 font-sans">
            <div className="flex justify-center">
               <img className="h-28 py-3" alt="UPQROO logo" />
            </div>
            <div className="flex flex-col w-full font-light py-3">
               <div className="text-xl font-semibold uppercase text-upqroo">
                  Universidad Politécnica de Quintana Roo
               </div>
               <div className="text-lg font-semibold uppercase text-poli">
                  {/* {{ this.carrera }} */}
               </div>

               <div className="text-lg font-semibold uppercase">
                  {/* {{ new Date().toLocaleDateString() }} */}
               </div>
               <div className="text-md font-semibold uppercase">
                  {/* Periodo : <span className="italic"> {{ this.periodoElegido }}</span> */}
               </div>
               <div className="text-md font-semibold uppercase">
                  {/* # Docentes : */}
                  {/* <span className="italic"> {{ this.totalDocentes }}</span> */}
               </div>
            </div>
            <div className="text-md font-semibold uppercase">
               {/* Promedio gral.
           <span
             className="italic px-2 py-1 text-semibold rounded-md"
             :className="[
               this.getColorValoracion(this.reporteGeneral.promedio_carrera),
             ]"
           >
             {{
               this.reporteGeneral.promedio_carrera +
               " - " +
               this.getCalificacion(this.reporteGeneral.promedio_carrera)
             }}
           </span> */}
            </div>
            <div className="flex flex-col w-full">
               <div
                  // v-if="this.cargandoDatosEvaluacion"
                  className="flex justify-center w-full"
               >
                  {/* <img
                         className="w-auto"
                         alt="cargando gif"
                         src="@/assets/cargandogif.gif"
                      /> */}
               </div>
               <div>
                  <div
                     className="border rounded border-gray-200 my-2 p-2 font-medium"
                     // v-for="(docente, index) in this.reporteGeneral.docentes"
                     //   :key="index"
                  >
                     <div className="flex flex-col lg:flex-row w-full">
                        <div className="flex justify-center w-full lg:w-3/12">
                           <p className="text-xs self-center text-gray-700">
                              {/* {{ docente.docente.nombre + " " }}
                     {{ docente.docente.apellido_paterno + " " }}
                     {{ docente.docente.apellido_materno }} */}
                           </p>
                        </div>
                        <div className="flex-col w-full lg:w-9/12">
                           <div
                              // v-for="(grupo, ind) in docente.grupos"
                              // :key="ind"
                              className="flex-col w-full"
                           >
                              <div
                                 // v-if="ind == 0"
                                 className="flex w-full border-b border-gray-200"
                              >
                                 <div className="w-2/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       Grupo
                                    </p>
                                 </div>
                                 <div className="w-6/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       Materia
                                    </p>
                                 </div>
                                 <div className="w-2/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       Alumnos
                                    </p>
                                 </div>
                                 <div className="w-2/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       Encuestados
                                    </p>
                                 </div>
                                 {/* <!-- <div className="w-2/12 text-xs flex-col">
                         <p className="text-gray-600 text-center">Preguntas</p>
                       </div> --> */}
                                 <div className="w-2/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       Pomedio
                                    </p>
                                 </div>
                                 <div className="w-2/12 text-xs flex-col">
                                    <p className="text-gray-600 text-center">
                                       {/* Valoraci&oacute;n */}
                                    </p>
                                 </div>
                              </div>

                              <div className="flex w-full my-1 border-b border-gray-200">
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-800 text-center text-xs">
                                       {/* {{ grupo.grupo }} */}
                                    </p>
                                 </div>
                                 <div className="w-6/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ grupo.materia.materia }} - ({{
                             grupo.materia.clave
                           }}) */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ grupo.total_alumnos }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ grupo.encuestados }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ grupo.materia.promedio }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p
                                       className="text-gray-700 text-center text-xs px-2 rounded-md font-semibold"
                                       //   :className="[
                                       //     this.getColorValoracion(grupo.materia.promedio),
                                       //   ]"
                                    >
                                       {/* {{ this.getCalificacion(grupo.materia.promedio) }} */}
                                    </p>
                                 </div>
                              </div>
                              <div
                                 className="flex w-full my-1 border-b border-gray-200 bg-gray-200"
                                 // v-if="ind == docente.grupos.length - 1"
                              >
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-800 text-center text-xs">
                                       {/* {{ docente.grupos.length || "0" }} */}
                                    </p>
                                 </div>
                                 <div className="w-6/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ docente.grupos.length || "0" }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ this.totalAlumnosXgrupo(docente.grupos) }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ this.totalEncuestadosXgrupo(docente.grupos) }} */}
                                    </p>
                                 </div>
                                 {/* <!-- <div className="w-2/12 flex-col">
                         <p className="text-gray-700 text-center text-xs">
                           {{ this.totapreguntasXgrupo(docente.grupos) }}
                         </p>
                       </div> --> */}
                                 <div className="w-2/12 flex-col">
                                    <p className="text-gray-700 text-center text-xs">
                                       {/* {{ docente.docente.promedio }} */}
                                    </p>
                                 </div>
                                 <div className="w-2/12 flex-col">
                                    <p
                                       className="text-gray-700 text-center text-xs px-2 rounded-md font-semibold"
                                       //   :className="[
                                       //     this.getColorValoracion(docente.docente.promedio),
                                       //   ]"
                                    >
                                       {/* {{ this.getCalificacion(docente.docente.promedio) }} */}
                                    </p>
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

export default GeneralStats;
