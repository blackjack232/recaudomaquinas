import React from 'react';
import './styles/app.scss';
import Inicio from './paginas/Inicio';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



const App = () => {
  return (
    <>
     
      <BrowserRouter>
     
        <Routes>
          
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Recaudos" element={<Inicio/>} />
          <Route exact path="/Maquinas" element={<Inicio/>} />
          <Route exact path="/Usuarios" element={<Inicio/>} />
          <Route exact path="/Otros" element={<Inicio/>} />        
          
        </Routes>
     
      </BrowserRouter>
     
      
    </>
  );
}

export default App;
