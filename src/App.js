//0. Import libraries
import React from 'react';
import Saludo from './saludo'


//1. Create a component
const App = () => {

  const saludar = () => {
    console.log('Hola');
  }

  return(
    <div>
      <h1>Hello React</h1>

      <Saludo />
    </div>
  );
}


//-1.Export components
export default App;