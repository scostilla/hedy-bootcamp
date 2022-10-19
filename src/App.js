import { useState } from 'react';
import './App.css';
import Cars from './components/car/Cars';
import Home from './components/Home';
import Paragraph from './components/Paragraph';
import ParagraphClase from './components/ParagraphClase';
import ReactForms from './components/ReactForms';
import Forms from './components/FormsClase';
import Actividad from './components/FormsClaseOtro.js';


function App() {
  return(
    <div>
      {/*<Paragraph/>
       <Cars/> */}
      {/* <ReactForms /> */}
      <ReactForms />
    </div>
  )
}

export default App;