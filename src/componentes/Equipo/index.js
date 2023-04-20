import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba'

const Equipo=(props)=>{
    
    const {colorPrimario,colorSecundario,titulo,id} = props.datos
    const {colaboradores,eliminarColaborador,actualizarColor,like} = props
    


return <>{ colaboradores.length>0 && 
            <section className="equipo" key={id} style={{
                backgroundColor: hexToRgba(colorPrimario,0.6)
                }}>
                
                <input 
                    type="color"
                    value={colorPrimario}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value,id)
                    }}/>
                
                <h3 style={{borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                    colaboradores.map((colaborador,index)=><Colaborador 
                    eliminarColaborador={eliminarColaborador} 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    like={like}
                    />)
                    }
                </div>
            </section>
        }
        </>
}

export default Equipo;