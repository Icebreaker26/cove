import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { SolicitudCliente } from "../componentes/SolicitudCliente";
import { SolicitudClienteVenta } from '../componentes/SolicitudClienteVenta';



import "../estilos/VistaPerfil.css"


const VistaPerfil = ({
    sesion,
    CLIENTE,
    carros,
    setCLIENTE,
    abrirVender
}) => {

    //Hacer petición al backend para traer los datos del usuario de la sesión, en este caso:

    
    const [datosPerfil, setDatosPerfil] = useState(null);

    const validarYAsignarDatosPerfil = () => {
        const cliente = CLIENTE.find(c => c.correo === sesion.correo);
        if (cliente) {
          setDatosPerfil({
            ...cliente
          });
        }
      };

            useEffect(() => {
                if (sesion) {
                validarYAsignarDatosPerfil();
                }
            }, [sesion]);


return(

    <>

    <section id="perfil">

    {datosPerfil ? <>

    <div className="personal">

 
     <img src="https://steamuserimages-a.akamaihd.net/ugc/94979365062922910/2EEBE4C9268266B4041A3D5514F6FDD3983223CC/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="" />
      <h1 className="name">{datosPerfil.nombre}</h1>
      <p className="country">{datosPerfil.correo}</p>
      <p className="stack">{datosPerfil.rol}</p>
      
      <h1 className="btn btn-danger" onClick={abrirVender}>¿Quieres vender un carro?</h1>

    </div>
      <div className='skills'>
        <h2>MI INFORMACIÓN</h2>
        <Table bordered style={{color:"white", width:"80%", margin:"0 auto"}}>
      <tbody>
        <tr>
          <td>Nombre</td>
          <td>{datosPerfil.nombre}</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>{datosPerfil.idCliente}</td>
        </tr>
        <tr>
          <td>Correo</td>
          <td>{datosPerfil.correo}</td>
        </tr>
        <tr>
          <td>Telefono</td>
          <td>{datosPerfil.telefono}</td>
        </tr>
        <tr>
          <td>Direccion</td>
          <td>{datosPerfil.direccion}</td>
        </tr>
        <tr>
          <td>Ciudad</td>
          <td>{datosPerfil.ciudad}</td>
        </tr>
        <tr>
          <td>Fecha de Nacimiento</td>
          <td>{datosPerfil.fechaNacimiento 
          //.toLocaleDateString('es-ES', {
            //    day: '2-digit',
             //   month: 'long',
               // year: 'numeric'})
               }</td>
        </tr>
        <tr>
          <td>Fecha de Registro</td>
          <td>{datosPerfil.fechaRegistro
          /*.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })*/}</td>
        </tr>
      </tbody>
    </Table>
  
    <div>

              <h1>MIS SOLICITUDES DE COMPRA</h1>

              {datosPerfil.solicitudes.map((solicitud,index)=> 
              
              <SolicitudCliente 
              solicitud={solicitud}
              datosPerfil={datosPerfil}
              carros={carros}
              CLIENTE={CLIENTE}
              setCLIENTE={setCLIENTE}
              
              />              
              
              )}

              <h1>MIS SOLICITUDES DE VENTA</h1>

              {datosPerfil.ventas.map((solicitud,index)=> 

              <SolicitudClienteVenta
              solicitud={solicitud}
              datosPerfil={datosPerfil}
              />              

              )}



    </div>
    
    
    </div>
    </>:<>
    
    <h1>NO HAY DATOS DEL PERFIL</h1>

    </>}
    </section>
    </>

)
}

export {VistaPerfil}