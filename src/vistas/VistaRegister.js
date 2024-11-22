import { IoPersonCircle } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import ferrari from "../images/ferrari.jpg"
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from 'axios';








const VistaRegister = ({abrirLogin,CLIENTE, setCLIENTE}) =>{

const handleIniciarSesion = () => abrirLogin();

const [nombre, setNombre] = useState("");
const [cc, setCC] = useState("");
const [telefono, setTelefono] = useState("");
const [correo, setCorreo] = useState("");
const [direccion, setDireccion] = useState("");
const [ciudad, setCiudad] = useState("");
const [contraseña, setContraseña] = useState("");


const handleRegister = async () =>{

  const campos =[nombre,cc,telefono,correo,direccion,ciudad,contraseña]

    if (campos.every(campo => campo)) {

        const NuevoUsuario = {
            idCliente: parseInt(cc, 10), // Convertir a número entero
            nombre: nombre.trim(), // Eliminar espacios adicionales
            correo: correo.trim(), // Asegurar formato limpio
            telefono: telefono.trim(), // Eliminar espacios adicionales
            direccion: direccion.trim(),
            ciudad: ciudad.trim(),
            rol: "CLIENTE", // Rol fijo
            fechaNacimiento: new Date("2004-08-26"), // Formato correcto de fecha
            fechaRegistro: new Date(), // Fecha actual
            estado: "ACTIVO", // Estado predeterminado
            notas: [], // Arreglo vacío válido
            solicitudes: [], // Arreglo vacío válido
            ventas: [], // Arreglo vacío válido
            contraseña: contraseña.trim(), // Limpiar la contraseña
          };
          
    CLIENTE.push(NuevoUsuario); //REEMPLAZAR POR VALIDACION EN LA API
    console.log(CLIENTE)

    try {
        // Enviar el nuevo cliente al servidor
        const response = await axios.post('http://localhost:8000/users', NuevoUsuario);
        setCLIENTE([...CLIENTE, response.data]); // Agregar el nuevo cliente al estado
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
      }

      abrirLogin()

    }else{
        console.log("Faltan campos")
    }


  

}

    return(
        <>
        <div style={{display:"flex", width:"100%"}}>
        <div style={{width:"50%"}}>
        <form>
            <h1 style={{ textAlign: "left", paddingLeft: "5vw", borderBottom: "3px solid red" }}>
            Bienvenido a Alejo Luxury
            </h1>            
            <h5 style={{textAlign:"left", marginLeft:"5vw"}} class="text-secondary">Crea una cuenta para acceder a nuestros servicios.</h5>
            
            <div  id="registerdiv">
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><IoPersonCircle /></span>
            <input required type="text" id="registerinput" class="form-control" value={nombre} placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div  id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaRegIdCard /></span>
            <input required type="text" id="registerinput" class="form-control" value={cc} placeholder="CC" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setCC(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv">

            <div id="registerseparador">

            <span class="input-group-text" id="registerspan"><FaPhoneAlt /></span>
            <input required type="text" id="registerinput" class="form-control" value={telefono} placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setTelefono(e.target.value)}/>
            </div>
            <div id="registerseparador">

            <span class="input-group-text" id="registerspan"><CiMail /></span>
            <input required type="text" id="registerinput" class="form-control" value={correo} placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={(e)=>setCorreo(e.target.value)}/>

            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaHouseUser /></span>
            <input required type="text"  id="registerinput" class="form-control" value={direccion} placeholder="Dirección" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setDireccion(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaCity /></span>
            <input required type="text" id="registerinput" class="form-control" value={ciudad} placeholder="Ciudad" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setCiudad(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><RiLockPasswordFill /></span>
            <input required type="password" id="registerinput" class="form-control" value={contraseña} placeholder="Contraseña" aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={(e)=>setContraseña(e.target.value)}/>
            </div>
            <div id="registerdiv" >
            <div id="registerseparador">
            <button type="button" onClick={handleRegister} class="btn btn-danger" style={{width:"100%"}} >Registrarse</button>
            
            </div>
            <p>¿Ya tienes una cuenta? <span style={{color:"red"}} onClick={handleIniciarSesion}> Inicia sesion</span></p>

            </div>

            </div>

        </form>
        </div>
        <div style={{width:"50%"}}>
        <img src={ferrari} style={{width:"100%", height:"90vh"}}/>
        </div>
        </div>
        </>
    )
}

export {VistaRegister}