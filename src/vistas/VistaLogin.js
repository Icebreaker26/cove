import { Footer } from "../componentes/Footer"
import React, { useState } from 'react';
import ferrari2 from "../images/ferrari2.jpeg"

const VistaLogin = ({

  abrirRegistrarse,
  sesion,
  setSesion,
  VistaPrincipal,
  CLIENTE

}) =>{

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [logged, setLogged] = useState(false);
  const [incorrecto, setIncorrecto] = useState(false);

//esto lo debe hacer el backend
  const iniciarSesion = (event) =>{

      event.preventDefault(); // Evita el envío por defecto si no lo quieres

      if (cuentas.usuario == usuario && cuentas.contraseña == contraseña){

        console.log("Login succesfull!!")
        setLogged(true);
        setSesion(cuentas)
        VistaPrincipal();

      }else{

        setIncorrecto(true)
        setTimeout(() => {
          setIncorrecto(false);
        }, 5000); // Cambia el estado después de 5 segundos

      }

  }

//ESTO DEBE IR EN LA BASE DE DATOS
  const cuentas ={
    usuario:"admin",
    nombre:"Alejo",
    rol:"admin",
    contraseña:"1234"
  }


  const handleRegistrarse = () => abrirRegistrarse();



    return(



        <>
              {logged 
              ?<h1>LOGGED IN</h1>
              :
                  <div class="row d-flex  align-items-center">
                          
                  <div style={{width:"60%", height:"100%"}}>
                    <img src={ferrari2}
                      class="img-fluid" alt="Sample image" style={{width:"100%",borderRight: "3px solid red"}}/>
                  </div>
                  
                  <div style={{width:"40%", height:"100%"}}>
                    <form style={{width:"90%", height:"100%"}} onSubmit={iniciarSesion}>

                      {incorrecto && <div class="alert alert-danger" role="alert">
                            ¡Usuario o contraseña incorrectos!
                          </div>
                      }
                    
                    <h1>Inicia Sesión</h1>


                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg" autocomplete="off"
                          placeholder="Ingresa una dirección de correo electrónico" value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                          placeholder="Ingresa tu contraseña" value={contraseña} onChange={(e)=> setContraseña(e.target.value)} />
                      </div>
      
                <div class="text-center text-lg-start">
                  <button  type="button" class="btn btn-primary btn-lg"
                    onClick={iniciarSesion} style={{width:"100%"}}>Ingresa
                    </button>
                  
                </div>

              </form>
              <p>¿No tienes una cuenta? <span style={{color:"red"}} onClick={handleRegistrarse}> Registrate</span></p>
            </div>
          </div>
        
      }
<Footer/>
        </>

    )
}

export {VistaLogin}