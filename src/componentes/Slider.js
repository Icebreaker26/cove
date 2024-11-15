import carSlider from '../images/carSlider.jpg'

const Slider = () =>{


return(

    <>

    <div id="contenedorSlider">

    <img src={carSlider}    style={{width:"98vw", height:"80vh", padding:"1%"}}/>
    </div>

    <div id="contenidoSlider">

    <h1 className="btn btn-danger" style={{fontSize:"3vw"}}>LOS MEJORES CARROS</h1>

    </div>

    
    </>

)}

export {Slider}