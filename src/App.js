import './App.css';
import React, { useState } from 'react';
import { VistaPrincipal } from './vistas/VistaPrincipal';
import { VistaLogin } from './vistas/VistaLogin';
import { Navbar } from './componentes/Navbar';
import { VistaRegister } from './vistas/VistaRegister';
import { VistaSobreNosotros } from './vistas/VistaSobreNosotros';
import { VistaPerfil } from './vistas/VistaPerfil';
import { VistaVender } from './vistas/VistaVender';




function App() {


  const CEO = [{

    idCeo:1087,
    nombre:"Alejandro",
    correo:"alejandro@gmail.com",
    telefono:"32174",
    direccion:"calle 16",
    fechaInicio: new Date("2024-11-04"),
    rol:"CEO",
    salario: 15000000,
    fechaNacimiento: new Date("2004-08-26"),
    estado:"ACTIVO"

  }]

  const EMPLEADO = [{

    idEmpleado:1087,
    nombre:"Alejandro",
    correo:"alejandro@gmail.com",
    telefono:"32174",
    direccion:"calle 16",
    fechaContratacion: new Date("2024-11-04"),
    rol:"EMPLEADO",
    salario: 2000000,
    fechaNacimiento: new Date("2004-08-26"),
    estado:"ACTIVO",
    notas:[]

  }]

  const [CLIENTE, setCLIENTE] = useState([{

    idCliente:1087,
    nombre:"Alejandro",
    correo:"admin",
    contraseña:"1234",
    telefono:"32174",
    direccion:"calle 16",
    ciudad:"Pereira",
    rol:"CLIENTE",
    fechaNacimiento: new Date("2004-8-26"),
    fechaRegistro: new Date("2024-11-4"),
    estado:"ACTIVO",
    notas:[],
    solicitudes:[
    {
      idSolicitud:1,
      idCarro:1,
      estado:"ACTIVA"

    },
    {
      idSolicitud:2,
      idCarro:1,
      estado:"ACTIVA"

    },
    {
      idSolicitud:3,
      idCarro:1,
      estado:"ACTIVA"

    },
    {
      idSolicitud:4,
      idCarro:9,
      estado:"ACTIVA"
    }],
    ventas:[{
      idSolicitud:1,
      nombrePropietario: "ALEJANDRO",
      ccPropietario: "1087547010" ,
      ciudadVehiculo: "PEREIRA",
      marca: "BMW",
      modelo: "Z4",
      año: "2025",
      version: "SDRIVE",
      placa: "VFK 39A",
      precio: "200000000" ,
      color: "ROJO",
      kilometraje:"200" ,
      tipoCombustible:"GASOLINA" ,
      transmision: "MANUAL" ,
      puertas: "2",
      descripcion:"TECHO PLEGABLE" ,
      estado: "ACTIVA"
    }]

  }]);
  
  const CARRO =
  [
  {
      idCarro:1,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
          "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg",
          "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640"
      ]
  
  },
  {
      idCarro:2,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
        "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg",  
        "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640"
        
      ]

  },
  {
      idCarro:3,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
        "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640",

          "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg"
        
      ]

  },
  {
      idCarro:4,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
        "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640",

      "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg"
        
      ]

  },
  {
      idCarro:5,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
        "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640"
       
      ]

  },
  {
      idCarro:6,
      marca:"BMW",
      modelo:"Z4",
      version:"RS",
      placa:"AAA000",
      año:2024,
      precio:200000000,
      color:"rojo",
      kilometraje:100,
      tipoCombustible:"Gasolina",
      transmision:"Manual",
      puertas:2,
      estado:"Nuevo",
      fechaIngreso: new Date("2024-11-3"),
      descripcion:[],
      imagenes:[
     "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-z4-m40i-6mt-251-66f43f8382990.jpg?crop=0.668xw:0.562xh;0.0927xw,0.319xh&resize=2048:*",
          "https://autosdeprimera.com/wp-content/uploads/2022/10/bmw-z4-2023-a.jpg",
          "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=responsive640"
      
      ]

  }

  ]



  const [nb, setNb] = useState(true); //navbar
  const [vp, setVp] = useState(true); //vista principal
  const [lg, setLg] = useState(false); //login
  const [rg, setRg] = useState(false);// Register
  const [ab, setAb] = useState(false);//Sobre nosotros
  const [perfil, setPerfil] = useState(false);//Perfil
  const [vender, setVender] = useState(false);//Vender


  const [sesion,setSesion] = useState(null);

  /*La sesion debe contener los datos relevantes para cada rol, asi que:

    CEO -> empleados, carros, clientes
    vendedor -> carros, clientes
    cliente -> carros
  */

  const sesionHandler = () =>{

   /* if(usuario.rol==="cliente"){

      //GET TODOS LOS CARROS EN UN OBJETO

    }else if(usuario.rol==="empleado"){

      //GET TODOS LOS CLIENTES
      //GET TODOS LOS CARROS

    }else if(usuario.rol==="admin"){

      //GET TODOS LOS EMPLEADOS
      //GET TODOS LOS CLIENTES
      //GET TODOS LOS CARROS

    }*/


  }

  const inicio = () =>{

    HandleCerrarTodo();
    setVp(true);
  
  }

  const login = () =>{
    
    HandleCerrarTodo();
    setLg(true);

  }

  const sobreNosotros = () =>{
 
    HandleCerrarTodo();
    setAb(true);

  }

  const register = () =>{
    
    HandleCerrarTodo();
    setRg(true);

  }

  const cerrarSesion = () =>{

    HandleCerrarTodo();
    setSesion(null);
    setVp(true);

  }

  const abrirPerfil = () =>{

    HandleCerrarTodo();
    setPerfil(true);
    
    
  }

  const abrirVender = () =>{
    HandleCerrarTodo();
    setVender(true);
  }

  const HandleCerrarTodo =() =>{

    setVp(false);
    setLg(false);
    setRg(false);
    setAb(false);
    setPerfil(false);
    setVender(false);


  }

  return (
    <>

    
    {nb && <Navbar inicio={inicio} sobreNosotros={sobreNosotros} sesion={sesion} abrirPerfil={abrirPerfil} cerrarSesion={cerrarSesion} login={login} register={register}/> }
    {vp && <VistaPrincipal sesion={sesion} setSesion={setSesion} abrirLogin={login} carros={CARRO} CLIENTE={CLIENTE}/>}
    {lg && <VistaLogin sesion={sesion} setSesion={setSesion} abrirRegistrarse={register} VistaPrincipal={inicio} CLIENTE={CLIENTE}/> }
    {rg && <VistaRegister sesion={sesion} setSesion={setSesion} abrirLogin={login} CLIENTE={CLIENTE}/>}
    {ab && <VistaSobreNosotros sesion={sesion} setSesion={setSesion}/>}
    {perfil && <VistaPerfil sesion={sesion} CLIENTE={CLIENTE} carros={CARRO} setCLIENTE={setCLIENTE} abrirVender={abrirVender}/>}
    {vender && <VistaVender abrirVender={abrirVender} CLIENTE={CLIENTE} setCLIENTE={setCLIENTE} sesion={sesion} abrirPerfil={abrirPerfil}/>}
  
    
    </>
  );
}

export default App;
