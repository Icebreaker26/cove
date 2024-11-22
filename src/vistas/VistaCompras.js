import { Compra } from "../componentes/Compra"

const VistaCompras = ({
    CLIENTE,
    carros
}) =>{

    return(
        <>
        
        <h1 style={{textAlign:"center"}}>SOLICITUDES DE COMPRA</h1>
        <div style={{width:"90vw", margin:"auto"}}>

        {CLIENTE.filter((cliente) => cliente.solicitudes.length > 0).map((cliente) => (

        <Compra 
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
        carros={carros}
        
        />))}
        </div>
    
        </>
    )

}

export {VistaCompras}