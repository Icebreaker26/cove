import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { FaUserTie } from "react-icons/fa";

const Venta = ({
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
        <div key={idCliente} class=""  style={{width: "100%",display:"inline-block" , textAlign:"center" }} >
                 <div class="">            
                 <img id='imagenPerfil' src="https://steamuserimages-a.akamaihd.net/ugc/94979365062922910/2EEBE4C9268266B4041A3D5514F6FDD3983223CC/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="" />

                    <h1>{nombre}</h1>
                    <h3>{correo}</h3>

                    {ventas.map((venta) => {
                        return( <>
                                <div key={venta.idSolicitud} class=""  style={{width: "100%",display:"inline-block" , textAlign:"center", borderStyle:"solid", borderColor:"blue" }} onClick={handleShow}>
                                    <>
                                    <div class="card-body"> 
                                    <div style={{display:'inline-block', width:"45%"}}>
                                        <h3>{venta.marca} - {venta.modelo}</h3>
                                        <h3>{venta.precio.toLocaleString("es-CO", { style: "currency", currency: "COP",  minimumFractionDigits: "0", maximumFractionDigits: "0"})}</h3>
                                    </div>
                                    </div>
                                    </>
                                    
                                </div>
            


      <Modal show={show} onHide={handleClose}         size="lg"      >
        <Modal.Header closeButton>
          <Modal.Title>  INFORMACIÓN DE LA VENTA </Modal.Title>
         
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
                <Tab eventKey="carro" title="Carro">
                    <Table striped bordered hover>
                    

                        <tbody>
                        <tr>
                            <td>Id de la Solicitud</td>
                            <td>{venta.idSolicitud}</td>
                            </tr>
                            
                            
                        <tr>
                            <td>Nombre del Propietario</td>
                            <td>{venta.nombrePropietario}</td>
                            </tr>
                            
                        <tr>
                            <td>CC del propietario</td>
                            <td>{venta.ccPropietario}</td>
                            </tr>
                            
                        <tr>
                            <td>Ciudad</td>
                            <td>{venta.ciudadVehiculo}</td>
                            </tr>
                            
                        <tr>
                            <td>Marca</td>
                            <td>{venta.marca}</td>
                            </tr>

                            
                        <tr>
                            <td>Modelo</td>
                            <td>{venta.modelo}</td>
                            </tr>
                            
                        <tr>
                            <td>Año</td>
                            <td>{venta.año}</td>
                            </tr>
                            
                        <tr>
                            <td>Versión</td>
                            <td>{venta.version}</td>
                            </tr>
                            
                        <tr>
                            <td>Placa</td>
                            <td>{venta.placa}</td>
                            </tr>
                            
                            
                             <tr>
                            <td>Precio</td>
                            <td>{venta.precio}</td>
                            </tr>

                            <tr>
                            <td>Color</td>
                            <td>{venta.color}</td>
                            </tr>

                            <tr>
                            
                            <td>Kilometraje</td>
                            <td>{venta.kilometraje}</td>
                            </tr>
                            <tr>
                            <td>Tipo de Combustible</td>
                            <td>{venta.tipoCombustible}</td>
                            </tr>
                            <tr>
                            <td>Tipo de Transmisión</td>
                            <td>{venta.transmision}</td>
                            </tr>
                            <tr>
                            <td>Numero de Puertas</td>
                            <td>{venta.puertas}</td>
                            </tr>
                            <tr>
                            <td>descripcion</td>
                            <td>{venta.descripcion}</td>
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
        ) })}

      </div>  
            </div>


      </>
    )
}

export {Venta}