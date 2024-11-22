import { Producto } from "../componentes/Producto"
import { ProductoInventario } from "../componentes/ProductoInventario"
import { useState } from 'react';

const VistaInventario = ({
    carros,
    setCARRO
}) =>{


    return(
        <>
        <h1>INVENTARIO</h1>
        {carros.map((carro)=>
            
            <ProductoInventario 
            
            id={carro.idCarro} 
            modelo={carro.modelo} 
            marca={carro.marca} 
            año={carro.año} 
            kilometraje={carro.kilometraje} 
            precio={carro.precio} 
            estado={carro.estado} 
            version={carro.version}
            color={carro.color}
            tipoCombustible={carro.tipoCombustible}
            transmision={carro.transmision}
            puertas={carro.puertas}
            imagenes={carro.imagenes}
            carros={carros}
            status={carro.status}
            setCARRO={setCARRO}

            
            />

            
            )}

        </>
    )

}

export {VistaInventario}