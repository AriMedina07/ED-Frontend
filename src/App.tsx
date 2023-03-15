import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.scss';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<div>Inicio</div>} />
            <Route
               path="/estudiante"
               element={<div>Hola soy un estudiante</div>}
            />
            <Route
               path="/coordinador"
               element={<div>Hola soy el coordi</div>}
            />
            <Route
               path="/administrador"
               element={<div>Hola soy el admin</div>}
            />
            <Route path="*" element={<div>404 not found</div>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
