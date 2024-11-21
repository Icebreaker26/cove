import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbVersions } from "react-icons/tb";
import { RxIdCard } from "react-icons/rx";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrManual } from "react-icons/gr";
import { BsSpeedometer } from "react-icons/bs";


const VistaVender = ({
    abrirVender,
    CLIENTE,
    setCLIENTE,
    sesion,
    abrirPerfil

}) =>{


    const [nombrePropietario, setNombrePropietario] = useState();
    const [ccPropietario, setCCPropietario] = useState("");
    const [ciudadVehiculo, setCiudadVehiculo] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [año, setAño] = useState("");
    const [version, setVersion] = useState("");
    const [placa, setPlaca] = useState("");
    const [precio, setPrecio] = useState("");
    const [color, setColor] = useState("");
    const [kilometraje, setKilometraje] = useState("");
    const [tipoCombustible, setTipoCombustible] = useState("");
    const [transmision, setTransmision] = useState("");
    const [puertas, setPuertas] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleEnviar = () =>{

        const cliente = CLIENTE.find(c => c.correo === sesion.correo);
        let indice = cliente.ventas.length;
        indice++;
        console.log("el indice es:" + indice)
        const campos = [
            nombrePropietario,
            ccPropietario,
            ciudadVehiculo,
            marca,
            modelo,
            año,
            version,
            placa,
            precio,
            color,
            kilometraje,
            tipoCombustible,
            transmision,
            puertas,
            descripcion,
        ];
        
        if (campos.every(campo => campo)) {


            const solicitudVenta ={
                idSolicitud: indice,
                nombrePropietario :nombrePropietario,
                ccPropietario : ccPropietario,
                ciudadVehiculo : ciudadVehiculo,
                marca :marca, 
                modelo :modelo,
                año :año,
                version : version,
                placa : placa,
                precio : precio,
                color : color,
                kilometraje : kilometraje,
                tipoCombustible :tipoCombustible,
                transmision :transmision,
                puertas :puertas ,
                descripcion :descripcion,
                estado: "ACTIVA"
            }

            console.log(solicitudVenta)
            cliente.ventas.push(solicitudVenta)
            console.log(cliente.ventas)

            abrirPerfil();
            


        }




    }

    return(

        <>
        <form>
            <h1 style={{ textAlign: "left", paddingLeft: "5vw", borderBottom: "3px solid red" }}>
            ¿Quieres vender un vehiculo?            </h1>            
            <h5 style={{textAlign:"left", marginLeft:"5vw"}} class="text-secondary">¡Llena este formulario y nos contáctaremos contigo lo más pronto posible!</h5>
            
            <div  id="registerdiv">
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><IoPersonCircle /></span>
            <input required type="text" id="registerinput" class="form-control" value={nombrePropietario} placeholder="Nombre del Propietario" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setNombrePropietario(e.target.value)}/>
            </div>
            <div  id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaRegIdCard /></span>
            <input required type="number" id="registerinput" class="form-control" value={ccPropietario} placeholder="CC del propietario" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setCCPropietario(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv">

            <div id="registerseparador">

            <span class="input-group-text" id="registerspan"><FaMapMarkerAlt />            </span>
            <input required type="text" id="registerinput" class="form-control" value={ciudadVehiculo} placeholder="Ciudad donde se encuentra el vehiculo" aria-label="Username" aria-describedby="addon-wrapping"
                        onChange={(e)=>setCiudadVehiculo(e.target.value)}/>
            </div>
            <div id="registerseparador">

            <span class="input-group-text" id="registerspan"><FaFlagCheckered /></span>
            <input required type="text" id="registerinput" class="form-control" value={marca} placeholder="Marca" aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={(e)=>setMarca(e.target.value)}/>

            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><IoLogoModelS /></span>
            <input required type="text"  id="registerinput" class="form-control" value={modelo} placeholder="Modelo" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setModelo(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaRegCalendarAlt /></span>
            <input required type="number" id="registerinput" class="form-control" value={año} placeholder="Año" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setAño(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><TbVersions /></span>
            <input required type="text"  id="registerinput" class="form-control" value={version} placeholder="Version" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setVersion(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><RxIdCard /></span>
            <input required type="text" id="registerinput" class="form-control" value={placa} placeholder="Placa" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setPlaca(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><FaMoneyBill1Wave /></span>
            <input required type="number"  id="registerinput" class="form-control" value={precio} placeholder="Precio" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setPrecio(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><IoMdColorPalette /></span>
            <input required type="text" id="registerinput" class="form-control" value={color} placeholder="Color" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setColor(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><BsSpeedometer />            </span>
            <input required type="number"  id="registerinput" class="form-control" value={kilometraje} placeholder="Kilometraje" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setKilometraje(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><BsFillFuelPumpFill />            </span>
            <input required type="text" id="registerinput" class="form-control" value={tipoCombustible} placeholder="Tipo de combustible" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setTipoCombustible(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >

            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><GrManual />            </span>
            <input required type="text"  id="registerinput" class="form-control" value={transmision} placeholder="Tipo de transmision" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setTransmision(e.target.value)}/>

            </div>
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><GiCarDoor /></span>
            <input required type="number" id="registerinput" class="form-control" value={puertas} placeholder="Puertas" aria-label="Username" aria-describedby="addon-wrapping"
                                                onChange={(e)=>setPuertas(e.target.value)}/>
            </div>
            </div>
            <div id="registerdiv" >
            <div id="registerseparador">
            <span class="input-group-text" id="registerspan"><MdOutlineDescription />           </span>
            <input required type="text" id="registerinput" class="form-control" value={descripcion} placeholder="Descripción" aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={(e)=>setDescripcion(e.target.value)}/>
            </div>
            <div id="registerdiv" >
            <div id="registerseparador">
            <button type="button" onClick={handleEnviar} class="btn btn-danger" style={{width:"100%"}} >Enviar</button>
            
            </div>

            </div>

            </div>

        </form>
        
        </>

    )
}

export {VistaVender}