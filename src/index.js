import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';//Importa App.jsx
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const contenido = (<div>
//   <h1>Titulo Fam</h1>
//   <div>Hola desde React</div>
// </div>);

//function Componente({titulo,contenido}){
// function Componente({titulo,children}){
//   //console.log({titulo,contenido});
//   //console.log(props);
//   //const titulo = props.titulo;
//   //const contenido = props.contenido;
//   //const {titulo,contenido} = props;
//   return(
//     <div className='contenedor'>
//       <h1>{titulo}</h1>
//       {/* <div>{contenido}</div> */}
//       <div>{children}</div>
//     </div>
//   );
// }

root.render(
  //<React.StrictMode>
  //  <App />
 // </React.StrictMode>

 //1 Forma de mostrar contenido. ok. quitar comentarios para verificar
  // <Componente
  //   titulo="Titulo Fam.Dev Jsx"
  //   contenido="Hola desde React Jsx"
  // />

  //2 Forma de mostrar contenido. ok
  // <Componente
  //   titulo="Titulo Fam.Dev Jsx"
  // >Hola desde React Jsx</Componente>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
