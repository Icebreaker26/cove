import Table from 'react-bootstrap/Table';
import { useState } from 'react';


const SolicitudClienteVenta = ({
    datosPerfil,
    solicitud
}) => {

    const [reRender, setReRender] = useState(false);


    const HandleEliminarSolicitud = () =>{

        solicitud.estado = "INACTIVA";
        console.log("Solicitud con id: " + solicitud.idSolicitud + "Eliminada con exito")
        // Cambia el estado auxiliar para forzar el re-renderizado
        setReRender(!reRender);

    }

    return(

        <>
        {solicitud.estado === "ACTIVA" &&

        <div style={{width: "80%",display:"inline-block" ,textAlign:"center", verticalAlign:"top"}}>                    
    
        <h2>ID DE LA SOLICITUD: {solicitud.idSolicitud}</h2>
        <Table bordered style={{color:"white", width:"80%", margin:"0 auto"}}>
      <tbody>
        
        <tr>
          <td>NOMBRE DEL PROPIETARIO</td>
          <td>{solicitud.nombrePropietario}</td>
        </tr>
        <tr>
          <td>CC DEL PROPIETARIO</td>
          <td>{solicitud.ccPropietario}</td>
        </tr>
        <tr>
          <td>CIUDAD</td>
          <td>{solicitud.ciudadVehiculo}</td>
        </tr>
        <tr>
          <td>MARCA</td>
          <td>{solicitud.marca}</td>
        </tr>
        <tr>
          <td>MODELO</td>
          <td>{solicitud.modelo}</td>
        </tr>
        <tr>
          <td>AÑO</td>
          <td>{solicitud.año}</td>
        </tr>
        <tr>
          <td>VERSIÓN</td>
          <td>{solicitud.version}</td>
        </tr>
        <tr>
          <td>PLACA</td>
          <td>{solicitud.placa}</td>
        </tr>
        <tr>
          <td>PRECIO</td>
          <td>{solicitud.precio}</td>
        </tr>
        <tr>
          <td>COLOR</td>
          <td>{solicitud.color}</td>
        </tr>
        <tr>
          <td>KILOMETRAJE</td>
          <td>{solicitud.kilometraje}</td>
        </tr>
        <tr>
          <td>TIPO DE COMBUSTIBLE</td>
          <td>{solicitud.tipoCombustible}</td>
        </tr>
        <tr>
          <td>TRANSMISIÓN</td>
          <td>{solicitud.transmision}</td>
        </tr>
        <tr>
          <td>PUERTAS</td>
          <td>{solicitud.puertas}</td>
        </tr>
        <tr>
          <td>DESCRIPCIÓN</td>
          <td>{solicitud.descripcion}</td>
        </tr>
        <tr>
          <td>ESTADO</td>
          <td>{solicitud.estado}</td>
        </tr>

      </tbody>
    </Table>

    <h1 className="btn btn-danger" style={{width:"50%"}} onClick={HandleEliminarSolicitud}>Eliminar Solicitud</h1>






                    </div>
}
        </>


    )
}

export {SolicitudClienteVenta}