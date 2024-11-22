import { Compra } from "../componentes/Compra"
import React, { useState, useEffect } from 'react';

import "../estilos/VistaCompras.css"

const VistaCompras = ({
    CLIENTE,
    carros
}) =>{

    const [forceRender, setForceRender] = useState(0); // Estado para forzar el re-renderizado

    // Este efecto se ejecutará cada vez que CLIENTE cambie
    useEffect(() => {
      // Aumentamos el valor de forceRender para forzar un re-renderizado
      setForceRender((prev) => prev + 1);
    }, [CLIENTE]); // Dependemos de CLIENTE, lo que hará que el efecto se ejecute cuando CLIENTE cambie
  
    return(
        <>  

        <div id="compras">
        
        <div style={{width:"90vw", margin:"auto"}}>
                    <h1 style={{textAlign:"center"}}>SOLICITUDES DE COMPRA</h1>


        {CLIENTE.filter((cliente) => cliente.solicitudes.length > 0).map((cliente) => (

        <Compra 
        idCliente={cliente.idCliente}
        nombre={cliente.nombre}
        correo={cliente.correo}
        contraseña={cliente.contraseña}
        telefono={cliente.telefono}
        direccion={cliente.direccion}
        ciudad={cliente.ciudad}
        rol={cliente.rol}
        estado={cliente.estado}
        notas={cliente.notas}
        solicitudes={cliente.solicitudes}
        ventas={cliente.ventas}
        carros={carros}
        
        />))}
        </div>
        </div>
        </>
    )

}

export {VistaCompras}