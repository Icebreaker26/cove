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
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";







const ProductoInventario = ({
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
    carros,
    setCARRO,
    status,
    renderizar

    }) => {

    const [key, setKey] = useState('general');
    const [show, setShow] = useState(false);
    const [showSolicitudCompra, setShowSolicitudCompra] = useState(false);
    const [AlertCompra, setAlertCompra] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [reRender, setReRender] = useState(false);


   const handleEliminar = () =>{

      const carrosActualizados = carros.map((carro) =>
        carro.idCarro === id ? { ...carro, status: "INACTIVO" } : carro
      );
    
      setCARRO(carrosActualizados); // Actualiza el estado del arreglo
      setReRender(!reRender);


    }

    
    return(

      
        <>
                {status === "ACTIVO" && <>

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

                                            <h1 class="btn btn-warning" style={{width:"50%"}}><FaRegEdit />EDITAR</h1>
                                             <h1 class="btn btn-danger" style={{width:"50%"}} onClick={handleEliminar}><FaTrash />ELIMINAR</h1>

                                           
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


      <Modal show={showSolicitudCompra} //onHide={}
               size="md"      >
        <Modal.Header closeButton>
          <Modal.Title>COMPRAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <h1 style={{textAlign:"center"}}>¿DESEAS ENVIAR UNA SOLICITUD DE COMPRA PARA {marca} {modelo}?</h1>
                    <h1 class="btn btn-danger"style={{width:"50%"}} 
                   // onClick={handleCloseSolicitudCompra}
                    >CANCELAR</h1>
                    <h1 class="btn btn-success" style={{width:"50%"}} 
                    //onClick={handleEnviarSolicitudCompra}
                    >ACEPTAR</h1>


        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

      </>}
  
</>

    )
}

export {ProductoInventario}