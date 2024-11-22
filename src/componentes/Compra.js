import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { FaUserTie } from "react-icons/fa";

const Compra = ({
    idCliente,
    nombre,
    correo,
    contraseña,
    telefono,
    direccion,
    ciudad,
    rol,
    estado,
    notas,
    solicitudes,
    ventas,
    carros

}) =>{

    const [key, setKey] = useState('detalles');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>  
        <div key={idCliente} class="card"  style={{width: "100%",display:"inline-block" , textAlign:"center", borderStyle:"solid", borderColor:"blue" }} onClick={handleShow}>
                 <div class="card-body">            
                 <FaUserTie style={{width:"10%", height:"auto"}}/>
                    <h1>{nombre}</h1>
                    <h3>{correo}</h3>

                    {solicitudes.map((solicitud) => {
                            // Encontrar el carro asociado a la solicitud
                            const carro = carros.find((carro) => carro.idCarro === solicitud.idCarro);

                            return (
                                <div key={solicitud.idSolicitud} class="card btn btn-outline-primary"  style={{width: "100%",display:"inline-block" , textAlign:"center", borderStyle:"solid", borderColor:"blue" }}>
                                    {carro ? (
                                    <>
                                    <div class="card-body"> 
                                    <div style={{display:'inline-block', width:"45%"}}>
                                    <img src={carro.imagenes[0]} class="card-img-top" style={{width:"90%"}} alt="..."/>
                                    </div>
                                    <div style={{display:'inline-block', width:"45%"}}>
                                        <h3>{carro.marca} - {carro.modelo}</h3>
                                        <h3>{carro.precio.toLocaleString("es-CO", { style: "currency", currency: "COP",  minimumFractionDigits: "0", maximumFractionDigits: "0"})}</h3>
                                    </div>
                                    </div>
                                    </>
                                    ) : (
                                    <p>Carro no encontrado</p>
                                    )}
                                </div>
                            );
                            })}
            </div>  
            </div>



      <Modal show={show} onHide={handleClose}         size="lg"      >
        <Modal.Header closeButton>
          <Modal.Title>  INFORMACIÓN DEL CLIENTE </Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        
                    <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
                >
                                <Tab eventKey="detalles" title="Detalles">
                    <Table striped bordered hover>
                       
                        <tbody>
                            <tr>
                            <td>Nombre</td>
                            <td>{nombre}</td>
                            </tr>
                            <tr>
                            
                            <td>Correo</td>
                            <td>{correo}</td>
                            </tr>
                            <tr>
                            <td>ID</td>
                            <td>{idCliente}</td>
                            </tr>
                            <tr>
                            <td>Telefono</td>
                            <td>{telefono}</td>
                            </tr>
                            <tr>
                            <td>Direccion</td>
                            <td>{direccion}</td>
                            </tr>
                            <tr>
                            <td>Ciudad</td>
                            <td>{ciudad}</td>
                            </tr>
                            
                        </tbody>
                        </Table>
                </Tab>
                
                </Tabs>

           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      </>
    )
}

export {Compra}