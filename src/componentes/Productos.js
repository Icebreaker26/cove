import { Producto } from "./Producto"

const Productos = ({
  sesion,
  abrirLogin,
  carros,
  CLIENTE,
  setCLIENTE
}) =>{




    return(

        <>
        <h1 style={{textAlign:"center"}}>¡Los favoritos de la colección!</h1>

        <div style={{width:"90vw", margin:"auto"}}>

        {carros.map((carro)=>
            
            <Producto 
            
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
            sesion={sesion}
            abrirLogin={abrirLogin}
            CLIENTE={CLIENTE}
            carros={carros}
            status={carro.status}
            setCLIENTE ={setCLIENTE}
        
            />

            
            )}

        </div>

        </>

    )}

export {Productos}