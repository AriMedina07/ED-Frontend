import React from 'react';
import { professorApi, studentApi } from './api';

function App() {
   React.useEffect(() => {
      (async () => {
         await professorApi.getProfessors();
         await studentApi.getStudents();
      })();
   }, []);

   return (
      <div className="App">
         <p>Buenas</p>
      </div>
   );
}

export default App;
