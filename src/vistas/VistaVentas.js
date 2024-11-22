import { Venta } from "../componentes/Venta"

const VistaVentas = ({
CLIENTE,
carros
}) =>{

    return(

        <>
        
        <h1 style={{textAlign:"center"}}>SOLICITUDES DE VENTAS</h1>
        <div style={{width:"90vw", margin:"auto"}}>

        {CLIENTE.filter((cliente) => cliente.ventas.length > 0).map((cliente) => (

        <Venta
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

export {VistaVentas}