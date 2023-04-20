//import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    const {tipo} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo">
        <label>{props.titulo}</label>

        <input
            type={tipo==="color"?"color":"text"}
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;