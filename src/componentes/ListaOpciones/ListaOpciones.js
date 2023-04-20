import "./ListaOpciones.css";
const ListaOpciones = (props)=>{
    console.log("props",props.equipos)
    // const equipos=["Programacion",
    //                 "Front End",
    //                 "Data Science",
    //                 "Devops",
    //                 "UX y Diseño",
    //                 "Móvil",
    //                 "Innovación y Gestión"];
    const manejarCambio = (e) =>{
        
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipo</label>
        <select onChange={manejarCambio} defaultValue={'DEFAULT'}>
            <option selected disabled value={"DEFAULT"} defaultValue={"DEFAULT"} hidden>Seleccionar equipo...</option>
            {props.equipos.map((equipo,index) => <option key={equipo.id} value={equipo.titulo}>{equipo.titulo}</option>)}
        </select>
    </div>

}

export default ListaOpciones;