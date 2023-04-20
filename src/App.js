// import Header from './componentes/Header/Header.js';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from  "../src/componentes/Miorg/index.js";
import Equipo from './componentes/Equipo/index.js';
import './App.css';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const [mostrarFormulario,actualizarMostrar]=useState(false);
  const [colaboradores,actualizarColaboradores]=useState([{
    id:uuidv4(),
    equipo: "Programacion",
    foto: "https://avatars.githubusercontent.com/u/92646263?s=400&v=4",
    nombre: "Esneyder Vega",
    puesto: "Aprendiz",
    fav: true
},{
  id:uuidv4(),
  equipo: "Front End",
  foto: "https://avatars.githubusercontent.com/u/92646263?s=400&v=4",
  nombre: "Esneyder Vega",
  puesto: "Aprendiz",
  fav: true
},{
  id:uuidv4(),
  equipo: "Data Science",
  foto: "https://avatars.githubusercontent.com/u/92646263?s=400&v=4",
  nombre: "Esneyder Vega",
  puesto: "Aprendiz",
  fav: true
},{
  id:uuidv4(),
  equipo: "Innovación y Gestión",
  foto: "https://avatars.githubusercontent.com/u/92646263?s=400&v=4",
  nombre: "Esneyder Vega",
  puesto: "Aprendiz",
  fav: false
}]);
//ternario --> condicion ? seMuestra : noSeMuestra
const cambiarMostrar =()=>{
  actualizarMostrar(!mostrarFormulario);
}

//registar colaboradores
const registrarColaborador=(colaborador)=>{
  console.log("nuevo colaborador",colaborador);
  //spread operator
  actualizarColaboradores([...colaboradores,colaborador])
}

//eliminar colaborador
const eliminarColaborador=(id)=>{
  
  const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id )
  actualizarColaboradores(nuevosColaboradores)
}


// const equipos=["Programacion",
//                     "Front End",
//                     "Data Science",
//                     "Devops",
//                     "UX y Diseño",
//                     "Móvil",
//                     "Innovación y Gestión"];
const [equiposo,actualizarEquipos]=useState([{
                  id: uuidv4(),
                  titulo: "Programacion",
                  colorPrimario: "#57C278",
                  colorSecundario: "#D9F7E9"
                },
                {
                  id: uuidv4(),
                  titulo: "Front End",
                  colorPrimario: "#82CFFA",
                  colorSecundario: "#E8F8FF"
                },
                {
                  id: uuidv4(),
                  titulo: "Data Science",
                  colorPrimario: "#A6D157",
                  colorSecundario: "#F0F8E2"
                },
                {
                  id: uuidv4(),
                  titulo: "Devops",
                  colorPrimario: "#E06B69",
                  colorSecundario: "#FDE7E8"
                },
                {
                  id: uuidv4(),
                  titulo: "UX y Diseño",
                  colorPrimario: "#DB6EBF",
                  colorSecundario: "#FAE9F5"
                },
                {
                  id: uuidv4(),
                  titulo: "Móvil",
                  colorPrimario: "#FFBA05",
                  colorSecundario: "#FFF5D9"
                },
                {
                  id: uuidv4(),
                  titulo: "Innovación y Gestión",
                  colorPrimario: "#FF8A29",
                  colorSecundario: "#FFEEDF"
                }
              ])

//actualizar color
const actualizarColor=(color,id)=>{
  const equiposActualizados = equiposo.map((equipo)=>{
    if(equipo.id===id){
      equipo.colorPrimario=color
    }
    return equipo
}) 
actualizarEquipos(equiposActualizados)
}
   //crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equiposo,{...nuevoEquipo,id:uuidv4()}])
    //console.log(nuevoEquipo)
}

const like = (id) => { 
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    if(colaborador.id===id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
//  console.log("like",id)
}

  return (
    
    <div>
      <Header/>
      {mostrarFormulario===true ? <Formulario 
      equipos={equiposo}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}    
      />: <div></div>}
      {/* {mostrarFormulario && <Formulario/>} */}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equiposo.map((equipo) => <Equipo 
                                  // equipo={equipo.titulo} 
                                  // colorPrimario={equipo.colorPrimario}
                                  // colorSecundario={equipo.colorSecundario}
                                  eliminarColaborador={eliminarColaborador}
                                  datos={equipo}
                                  key={equipo.id}
                                  colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
                                  actualizarColor={actualizarColor}
                                  like={like}
                                  />)}
      <Footer/>
    </div>
    

  );
}

export default App;
