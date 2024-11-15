import './App.css';
import React, { useState } from 'react';
import { VistaPrincipal } from './vistas/VistaPrincipal';
import { VistaLogin } from './vistas/VistaLogin';
import { Navbar } from './componentes/Navbar';
import { VistaRegister } from './vistas/VistaRegister';
import { VistaSobreNosotros } from './vistas/VistaSobreNosotros';
import { VistaPerfil } from './vistas/VistaPerfil';





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
          "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",

          "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg"
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
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg",
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
          "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",
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
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg",
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
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg",
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
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/bmw_com_co/landing/Secci%C3%B3n%20lista%20de%20precios%20BMW%20serie%203%20Sed%C3%A1n_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/marketLATAM/common/lista-de-precios/bmw-4-series-ag-models-equipment-mc-dynamics-03_890x501.jpg",
        "https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/onepager/bmw-i4-edrive-40-onepager-ms-range.jpg",
      ]

  }

  ]



  const [nb, setNb] = useState(true); //navbar
  const [vp, setVp] = useState(true); //vista principal
  const [lg, setLg] = useState(false); //login
  const [rg, setRg] = useState(false);// Register
  const [ab, setAb] = useState(false);//Sobre nosotros
  const [perfil, setPerfil] = useState(false);//Perfil

  const [sesion,setSesion] = useState(null);

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

  const HandleCerrarTodo =() =>{

    setVp(false);
    setLg(false);
    setRg(false);
    setAb(false);
    setPerfil(false);

  }

  return (
    <>

    {nb && <Navbar inicio={inicio} sobreNosotros={sobreNosotros} sesion={sesion} abrirPerfil={abrirPerfil} cerrarSesion={cerrarSesion} login={login} register={register}/> }
    {vp && <VistaPrincipal sesion={sesion} setSesion={setSesion} abrirLogin={login} carros={CARRO} CLIENTE={CLIENTE}/>}
    {lg && <VistaLogin sesion={sesion} setSesion={setSesion} abrirRegistrarse={register} VistaPrincipal={inicio} CLIENTE={CLIENTE}/> }
    {rg && <VistaRegister sesion={sesion} setSesion={setSesion} abrirLogin={login} CLIENTE={CLIENTE}/>}
    {ab && <VistaSobreNosotros sesion={sesion} setSesion={setSesion}/>}
    {perfil && <VistaPerfil sesion={sesion} CLIENTE={CLIENTE} carros={CARRO} setCLIENTE={setCLIENTE}/>}

    
    </>
  );
}

export default App;
