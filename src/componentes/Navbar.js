import { FaCar } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";



const Navbar = ({
    inicio,
    sobreNosotros,
    sesion,
    abrirPerfil,
    cerrarSesion,
    login,
    register
}) =>{



return(

            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

                        <div style={{paddingLeft:"2vw"}}>
                            <a class="navbar-brand" href="#">
                            {//<img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                            }
                            <FaCar style={{color:"red", fontSize:"3vw", marginRight:"10px"}} /> 
                            Los Carros de Alejo
                            </a>
                        </div>

                        <div style={{marginLeft:"auto", paddingRight:"2vw"}}>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={inicio}>Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" onClick={sobreNosotros}>Nosotros</a>
                            </li>

                            

                            {sesion 
                            
                            ? <>

                            <li class="nav-item" style={{marginLeft:"1vw"}}>
                            <a class="nav-link btn btn-outline-secondary" onClick={abrirPerfil} >{sesion.nombre}
                            </a>
                            </li>

                            <li class="nav-item" style={{marginLeft:"1vw"}}>
                            <a class="nav-link btn btn-outline-secondary" onClick={cerrarSesion} >CERRAR
                            </a>
                            </li>
                            </>
                            :<>
                            <li class="nav-item" style={{marginLeft:"1vw"}}>
                            <a class="nav-link btn btn-outline-secondary"  onClick={login}> Inicia Sesión
                            </a>
                            </li>
                            <li class="nav-item" style={{marginLeft:"1vw"}}>
                            <a class="nav-link btn btn-danger text-dark" onClick={register}> Registrarse
                            </a>
                            </li>
                            </>}
                        </ul>
                        </div>
                        </div>
                        </nav>

            </>

)
}

export {Navbar}