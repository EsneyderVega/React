import { useState } from "react"; //importacion para uso del hook useState
import "./Formulario.css";  //importacion del css del componente
import CampoTexto from "../CampoTexto/CampoTexto"; // importacion de componenete campo de texto 
import ListaOpciones from "../ListaOpciones/ListaOpciones"; // importacion de la lista de opciones
import Boton from "../boton/boton"; //importacion del boton
//definicion compenente formulario
const Formulario = (props)=>{
        const { registrarColaborador,crearEquipo } =props;
        
        const [nombre,actualizarNombre]=useState(""); //estado del campo nombre
        const [puesto,actualizarPuesto]=useState(""); //estado del campo puesto
        const [foto,actualizarFoto]=useState("");  
        const [equipo,actualizarEquipo]=useState(""); 

        const [titulo,actualizarTitulo] = useState("")
        const [color,actualizarColor] = useState("")

        //estad del campo foto 
        //funcion para el envio de datos
        const manejarEnvio = (e) => {
                e.preventDefault(); //previene la recarga total dela pagina
                //objeto con los datos del form
                let datosEnviar={
                        nombre,
                        puesto,
                        foto,
                        equipo
                }
                registrarColaborador(datosEnviar)
        }
        
        const manejarEquipo=(e)=>{
                e.preventDefault();
                let equipo ={
                        titulo,
                        colorPrimario:color
                }
                crearEquipo(equipo)
        }

return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2> 
        <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required={true} 
                valor={nombre}
                actualizarValor={actualizarNombre}                
        />
        
        <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required={true}
                valor={puesto} 
                actualizarValor={actualizarPuesto}                
        />
        
        <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                required 
                valor={foto}
                actualizarValor={actualizarFoto}                
        />
        {/* <CampoTexto titulo="Equipo" place="Seleccionar equipo"/> */}
        <ListaOpciones
                equipos={props.equipos}
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
        />
        <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2> 
                <CampoTexto 
                        titulo="Titulo" 
                        placeholder="Ingresar Titulo" 
                        required={true} 
                        valor={titulo}
                        actualizarValor={actualizarTitulo}                
                />
                
                <CampoTexto 
                        titulo="Color" 
                        placeholder="Ingresar el color Hex" 
                        required={true}
                        valor={color} 
                        tipo="color"
                        actualizarValor={actualizarColor}                
                />
                <Boton texto="Crear equipo"/>
        </form>
        </section>    
};

export default Formulario;