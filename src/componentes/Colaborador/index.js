//import { useState } from "react"
import "./Colaborador.css"
import { AiFillCloseCircle,AiOutlineHeart,AiFillHeart } from "react-icons/ai"

const Colaborador=(props)=>{
    const {nombre,puesto,foto,id,fav} = props.datos
    const {colorPrimario,eliminarColaborador,like}=props
    const eliminado=(iD)=>{
        eliminarColaborador(iD)
    }
    
    return <>{<div className="colaborador" key={id}>
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminado(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={foto} alt={nombre} />
    </div><div className="info">
            <h4 className="name">{nombre}</h4>
            <h5>{puesto}</h5>
            
            {fav?<AiFillHeart onClick={()=>like(id)} color="red"/>:
            <AiOutlineHeart onClick={()=>like(id)} color="#edeeed"/>}
        </div>
    </div>}</>
}
export default Colaborador;