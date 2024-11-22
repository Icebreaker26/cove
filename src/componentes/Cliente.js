import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { FaUserTie } from "react-icons/fa";

const Cliente = ({
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
    ventas

}) =>{

    const [key, setKey] = useState('detalles');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>  
        <div key={idCliente} class="card btn btn-outline-primary"  style={{width: "32%",display:"inline-block" , margin:"5px", textAlign:"center", borderStyle:"solid", borderColor:"blue" }} onClick={handleShow}>
                 <div class="card-body">            
                 <FaUserTie style={{width:"30%", height:"auto"}}/>
                    <h1>{nombre}</h1>
                    <h3>{correo}</h3>
                  
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

export {Cliente}