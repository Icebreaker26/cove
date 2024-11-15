import Badge from 'react-bootstrap/Badge';
import { GiPathDistance } from "react-icons/gi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { useState } from 'react';

const SolicitudCliente = ({

datosPerfil,
carros,
solicitud,
CLIENTE,
setCLIENTE

}) =>{


    const [reRender, setReRender] = useState(false);


    const carroSolicitud = carros.find(carro => carro.idCarro === solicitud.idCarro);

    const HandleEliminarSolicitud = () =>{

        solicitud.estado = "INACTIVA";
        console.log("Solicitud con id: " + solicitud.idSolicitud + "Eliminada con exito")
        console.log(CLIENTE)
        // Cambia el estado auxiliar para forzar el re-renderizado
        setReRender(!reRender);
        
    }

    return(

<>

{solicitud.estado === "ACTIVA" &&
    <div style={{width:"80%", margin:"0 auto"}}>

<div style={{width: "50%",display:"inline-block" ,textAlign:"center", verticalAlign:"top"}}>


<img 
  src={carros.find(carro => carro.idCarro === solicitud.idCarro)?.imagenes[0] || "https://static.vecteezy.com/system/resources/previews/039/642/960/non_2x/a-vintage-classic-car-silhouette-black-illustration-vector.jpg"} 
  className="card-img-top" 
  alt="..." 
/>

</div>
<div style={{width: "50%",display:"inline-block" ,textAlign:"center", verticalAlign:"top"}}>
    
                                            <div style={{ border: "0px solid gray", padding:"10px" }}>   
                                            <h2>{carroSolicitud?.marca} {carroSolicitud?.modelo}</h2>
                                            <h4><BiSolidCalendarStar />  {carroSolicitud?.año}</h4> 
                                            <h4><GiPathDistance/>  {carroSolicitud?.kilometraje} km</h4>
                                            <Badge bg="primary">{carroSolicitud?.estado}</Badge>
                                            <h1 className="btn btn-outline-danger" style={{width:"100%"}}><h1>{carroSolicitud?.precio.toLocaleString("es-CO", { style: "currency", currency: "COP",  minimumFractionDigits: "0", maximumFractionDigits: "0"})}</h1></h1>
                                            <h1 className="btn btn-outline-success" style={{width:"60%"}}>ID de Solicitud: {solicitud.idSolicitud}</h1>
                                            <a  href='https://api.whatsapp.com/send/?phone=3217467837&text&type=phone_number&app_absent=0' target='_blank'><h1 className="btn btn-success" style={{width:"50%"}}>Pregúntanos</h1></a>
                                            <h1 className="btn btn-danger" style={{width:"50%"}} onClick={HandleEliminarSolicitud}>Eliminar Solicitud</h1>

                                             </div>

</div>
<h1>

</h1>
</div>
}
</>

)

}

export {SolicitudCliente}