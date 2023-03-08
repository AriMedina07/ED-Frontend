import React from 'react';
import { professorApi, studentApi } from './api';
import './styles/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry } from '@fortawesome/free-regular-svg-icons';

function App() {
   React.useEffect(() => {
      (async () => {
         await professorApi.getProfessors();
         await studentApi.getStudents();
      })();
   }, []);

   return (
      <div className="App">
         <p className="text-center">Buenas</p>
         <FontAwesomeIcon icon={faAngry} />
      </div>
   );
}

export default App;
