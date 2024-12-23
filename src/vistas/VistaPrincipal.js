import { Navbar } from '../componentes/Navbar';
import { Slider } from '../componentes/Slider';
import { Productos } from '../componentes/Productos';
import { Footer } from '../componentes/Footer';

const VistaPrincipal = ({
    sesion,
    setSesion,
    abrirLogin,
    carros,
    CLIENTE,
    setCLIENTE
}) =>{

    return(

        <>

        <Slider/>
        <Productos sesion={sesion} abrirLogin={abrirLogin} carros={carros} CLIENTE={CLIENTE} setCLIENTE={setCLIENTE}/>
        <Footer/>
        
        </>

    )
}

export {VistaPrincipal}
