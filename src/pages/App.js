import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "./Cadastro"
import Hardware from "./Hardware";
import Perifericos from "./Perifericos";
import Jogos from "./Jogos";
import Software from "./Software";
import Celulares from "./Celulares";
import Tvs from "./Tvs";
import Computadores from "./Computadores";


import '../css/App.css';


// const pages = {
//   hardware:{
//     text: "Hardware",
//     component: Hardware
//   },
  
//   perifericos:{
//     text: "Periféricos",
//     component: Perifericos
//   },
//   jogos:{
//     text: "Jogos",
//     component: Jogos
//   },
//   software:{
//     text: "Softwares",
//     component: Software
//   },
//   celular:{
//     text: "Celulares",
//     component: Celulares
//   },
//   tvs:{
//     text:"TVs",
//     component: Tvs
//   },
//   computadores:{
//     text: "Computadores",
//     component: Computadores
//   }
// }



const App = () => {

  return (
    <Router>

      <Routes>
        <Route path="/Jogos" element={<Jogos/>} />
        <Route path="/Celulares" element={<Celulares/>} />
        <Route path="/Hardware" element={<Hardware/>} />
        <Route path="/Tvs" element={<Tvs/>} />
        <Route path="/Computadores" element={<Computadores/>} />
        <Route path="/Software" element={<Software/>} />
        <Route path="/Perifericos" element={<Perifericos/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/" element={<Home/>} />
        
      </Routes>
      
    </Router>
    
  );
}

export default App;
