import { Cliente } from "../componentes/Cliente"

import "../estilos/VistaClientes.css"


const VistaClientes = ({
    CLIENTE
}) =>{

    return(
        <>
        <div id="clientes">
        <h1 style={{textAlign:"center"}}>CLIENTES</h1>
        <div style={{width:"90vw", margin:"auto"}}>

        {CLIENTE.map((cliente)=> 

        <Cliente 
        idCliente={cliente.idCliente}
        nombre={cliente.nombre}
        correo={cliente.correo}
        contraseña={cliente.contraseña}
        telefono={cliente.telefono}
        direccion={cliente.direccion}
        ciudad={cliente.ciudad}
        rol={cliente.rol}
        estado={cliente.estado}
        notas={cliente.notas}
        solicitudes={cliente.solicitudes}
        ventas={cliente.ventas}
        
        />)}
        </div>
        </div>
        </>
    )

}

export {VistaClientes}