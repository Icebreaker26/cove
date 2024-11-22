
import "../estilos/VistaAdmin.css"
import { FaCarSide } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";





const VistaAdmin = ({
            abrirInventario,
            abrirClientes,
            abrirCompras,
            abrirVentas,
}) =>{

    return(

        <>

        <div id="admin">


        <h1>PANEL DEL ADMINISTRADOR</h1>

        <div id="contenedor"> 

            <div id="element" onClick={abrirInventario}>
            <FaCarSide style={{ width: "90%", height: "auto" }}/>
            <h2>INVENTARIO</h2>
            </div>

            
            <div id="element" onClick={abrirClientes}>
            <FaUsers style={{ width: "90%", height: "auto" }}/>
            <h2>CLIENTES</h2>

            </div>
            
            <div id="element" onClick={abrirCompras}>
            <FaMoneyCheckAlt style={{ width: "90%", height: "auto" }} />
            <h2>COMPRAS</h2>

            </div>
            
            <div id="element" onClick={abrirVentas}>
            <FaEnvelopeCircleCheck style={{ width: "90%", height: "auto" }}/>
            <h2>VENTAS</h2>
            </div>

            </div>


        </div>
        
        </>
    )
}

export {VistaAdmin}