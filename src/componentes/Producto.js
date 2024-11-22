import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GiPathDistance } from "react-icons/gi";
import { BiSolidCalendarStar } from "react-icons/bi";
import Table from 'react-bootstrap/Table';
import { GrView } from "react-icons/gr";
import Carousel from 'react-bootstrap/Carousel';
import {ImagenCarrusel} from './ImagenCarrusel';
import { FaCommentsDollar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';



const Producto = ({
    id,
    modelo, 
    marca, 
    año,
    kilometraje,
    estado,
    precio,
    version,
    color,
    tipoCombustible,
    transmision,
    puertas,
    imagenes,
    sesion,
    abrirLogin,
    CLIENTE,
    carros,
    status,
    setCLIENTE
   

    }) => {

    const [key, setKey] = useState('general');
    const [show, setShow] = useState(false);
    const [showSolicitudCompra, setShowSolicitudCompra] = useState(false);
    const [AlertCompra, setAlertCompra] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSolicitudCompra = () => setShowSolicitudCompra(false);

    /*const handleEnviarSolicitudCompra =  async () => {
      

      const ClienteSolicitud = CLIENTE.find(cliente => cliente.correo === sesion.correo)
    
      
      let nuevaId = ClienteSolicitud.solicitudes.length+1;

      let NuevaSolicitud = {

        idSolicitud:nuevaId,
        idCarro:id,
        estado:"ACTIVA"

      }


      console.log(ClienteSolicitud._id)
      
      // Realizar la solicitud PUT al backend para actualizar las solicitudes del cliente
      const response = await axios.put(
      `http://localhost:8000/users/${ClienteSolicitud._id}`, // URL con la ID del cliente
      {
        solicitudes: [...ClienteSolicitud.solicitudes, NuevaSolicitud], // Agregar la nueva solicitud
      }
    );

      const pushSolicitud = ClienteSolicitud.solicitudes.push(NuevaSolicitud)

      console.log(ClienteSolicitud);
      console.log(NuevaSolicitud);

      handleCloseSolicitudCompra();

        setAlertCompra(true)
        setTimeout(() => {
        setAlertCompra(false);
        }, 5000); // Cambia el estado después de 5 segundos

      
    
    }*/
        const handleEnviarSolicitudCompra = async () => {
          try {
            // Encontrar al cliente actual por el correo en la sesión
            const ClienteSolicitud = CLIENTE.find((cliente) => cliente.correo === sesion.correo);
        
            if (!ClienteSolicitud) {
              console.error("No se encontró el cliente con el correo proporcionado.");
              return;
            }
        
            // Crear una nueva solicitud
            const nuevaId = ClienteSolicitud.solicitudes.length + 1;
            const NuevaSolicitud = {
              idSolicitud: nuevaId,
              idCarro: id, // ID del carro (asegúrate de que este sea un valor válido)
              estado: "ACTIVA",
            };
        
            // Actualizar solicitudes localmente
            const solicitudesActualizadas = [...ClienteSolicitud.solicitudes, NuevaSolicitud];
        
            // Realizar la solicitud PUT al backend para actualizar las solicitudes del cliente
            const response = await axios.put(
              `http://localhost:8000/users/${ClienteSolicitud._id}`, // URL con la ID del cliente
              {
                solicitudes: solicitudesActualizadas, // Enviar las solicitudes actualizadas
              }
            );
        
            // Actualizar el estado local con los datos recibidos del servidor
            const clienteActualizado = response.data;
            const pushSolicitud = ClienteSolicitud.solicitudes.push(NuevaSolicitud)

            // Asegurarse de que CLIENTE se actualiza correctamente
            setCLIENTE((prevCLIENTE) =>
              prevCLIENTE.map((cliente) =>
                cliente._id === clienteActualizado._id ? clienteActualizado : cliente
              )
            );
        
            console.log("Solicitud enviada correctamente:", clienteActualizado);
          } catch (error) {
            console.error("Error al enviar la solicitud de compra:", error.response?.data || error.message);
          }
        
           handleCloseSolicitudCompra();

        setAlertCompra(true)
        setTimeout(() => {
        setAlertCompra(false);
        }, 5000); // Cambia el estado después de 5 segundos

      
        };
        
    const HandleComprar = () =>{

      if(sesion){

        setShowSolicitudCompra(true);


      }else{
        handleClose();
        abrirLogin();
        
      }

    }

    
    return(

      
        <>
        {status == "ACTIVO" ? (<>
            <div key={id} class="card" style={{width: "32%",display:"inline-block" , margin:"5px", textAlign:"center" }} onClick={handleShow}>
                <img src={imagenes[0]} class="card-img-top" alt="..."/>
                 <div class="card-body">
            
    
                <h4>{marca} {modelo}</h4>
                <h4 className="btn btn-outline-danger" style={{width:"100%"}}><h4>{precio.toLocaleString("es-CO", { style: "currency", currency: "COP",  minimumFractionDigits: "0", maximumFractionDigits: "0"})}</h4></h4>

                                            <h5><BiSolidCalendarStar />  {año} <GiPathDistance/>  {kilometraje} km</h5> 
                                            <Badge bg="primary" styles={{width:"40%"}}>{estado}</Badge> <br></br>

                {//<h4 className="btn btn-danger" style={{width:"15%"}} onClick={handleShow}><GrView /></h4>
                }

                  
            </div>  
            </div>



      <Modal show={show} onHide={handleClose}         size="lg"      >
        <Modal.Header closeButton>
          <Modal.Title>{marca} {modelo}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        {AlertCompra && <div class="alert alert-success" role="alert">
                              ¡SOLICITUD EXITOSA! 
                          </div>
                      }

                    <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
                >
                <Tab eventKey="general" title="General">

                                        <div>

                                        <div style={{width: "50%",display:"inline-block" ,textAlign:"center", verticalAlign:"top"}}>

                                        <img src={imagenes[0]} class="card-img-top" alt="..." />

                                            
                                        </div>
                                        <div style={{width: "50%",display:"inline-block" , padding:"0px", textAlign:"left"}}>
                                            
                                        <div style={{ border: "0px solid gray", padding:"10px" }}>   
                                            <h2>{marca} {modelo}</h2>
                                            <h4><BiSolidCalendarStar />  {año}</h4> 
                                            <h4><GiPathDistance/>  {kilometraje} km</h4>
                                            <Badge bg="primary">{estado}</Badge>
                                            <h1 className="btn btn-outline-danger" style={{width:"100%"}}><h1>{precio.toLocaleString("es-CO", { style: "currency", currency: "COP",  minimumFractionDigits: "0", maximumFractionDigits: "0"})}</h1></h1>
                                           
                                            
                                             </div>


                                            </div>

                                            <a  href='https://api.whatsapp.com/send/?phone=3217467837&text&type=phone_number&app_absent=0' target='_blank'><h1 class="btn btn-success"style={{width:"50%"}}><FaWhatsapp /> PREGUNTAR</h1></a>
                                             <h1 class="btn btn-info" style={{width:"50%"}} onClick={HandleComprar}><FaCommentsDollar /> COMPRAR</h1>

                                           
                                        </div>

                                    


                </Tab>
                <Tab eventKey="detalles" title="Detalles">
                    <Table striped bordered hover>
                       
                        <tbody>
                            <tr>
                            <td>Marca</td>
                            <td>{marca}</td>
                            </tr>
                            <tr>
                            
                            <td>Modelo</td>
                            <td>{modelo}</td>
                            </tr>
                            <tr>
                            <td>Version</td>
                            <td>{version}</td>
                            </tr>
                            <tr>
                            <td>Año</td>
                            <td>{año}</td>
                            </tr>
                            <tr>
                            <td>color</td>
                            <td>{color}</td>
                            </tr>
                            <tr>
                            <td>Kilometraje</td>
                            <td>{kilometraje}</td>
                            </tr>
                            <tr>
                            <td>Tipo de combustible</td>
                            <td>{tipoCombustible}</td>
                            </tr>
                            <tr>
                            <td>Transmisión</td>
                            <td>{transmision}</td>
                            </tr>
                            <tr>
                            <td>Puertas</td>
                            <td>{puertas}</td>
                            </tr>
                            <tr>
                            <td>Estado</td>
                            <td>{estado}</td>
                            </tr>
                            
                        </tbody>
                        </Table>
                </Tab>
                <Tab eventKey="fotos" title="Fotos" >
                        <Carousel>
                    {imagenes.map((imagen)=>

                                <Carousel.Item>
                                <ImagenCarrusel imagen={imagen}/>
                                <Carousel.Caption>
                                <h3>{marca} {modelo}</h3>
                                </Carousel.Caption>
                                </Carousel.Item>


                    )}
                                        

                        </Carousel>
                </Tab>
                </Tabs>

           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showSolicitudCompra} onHide={handleCloseSolicitudCompra}         size="md"      >
        <Modal.Header closeButton>
          <Modal.Title>COMPRAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <h1 style={{textAlign:"center"}}>¿DESEAS ENVIAR UNA SOLICITUD DE COMPRA PARA {marca} {modelo}?</h1>
                    <h1 class="btn btn-danger"style={{width:"50%"}} onClick={handleCloseSolicitudCompra}>CANCELAR</h1>
                    <h1 class="btn btn-success" style={{width:"50%"}} onClick={handleEnviarSolicitudCompra}>ACEPTAR</h1>


        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </>) : (<></>) }
</>

    )
}

export {Producto}