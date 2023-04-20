//import { useState } from "react"
import "./MiOrg.css"

const MiOrg=(props)=>{
//hooks -estado 
//useState importar useState from "react" 
//const [nombreVariable,funcionActualiza]=useState(valor inicial)
//console.log(props.cambiarMostrar)
//const [mostrar,actualizarMostrar]= useState(true);

// const manejarClick =()=>{
//     props.cambiarMostrar(!mostrar)
//   //  actualizarMostrar(!mostrar);
// }

return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img onClick={props.cambiarMostrar} src="/img/add.png" alt="add"/>
    </section>
}
export default MiOrg;