import { Navbar } from '../componentes/Navbar';
import { Slider } from '../componentes/Slider';
import { Productos } from '../componentes/Productos';
import { Footer } from '../componentes/Footer';

const VistaPrincipal = ({
    sesion,
    setSesion,
    abrirLogin,
    carros,
    CLIENTE
}) =>{

    return(

        <>

        <Slider/>
        <Productos sesion={sesion} abrirLogin={abrirLogin} carros={carros} CLIENTE={CLIENTE}/>
        <Footer/>
        
        </>

    )
}

export {VistaPrincipal}
