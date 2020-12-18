//0. Import libraries
import React from 'react';
import Saludo from './saludo'
import Tweet from './Tweet'


//1. Create a component
const App = () => {

  const saludar = () => {
    console.log('Hola');
  }

  return(
    <div className="App">
      <h1>Hello React</h1>
      <div className="Tweets">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
      <Saludo />
    </div>
  );
}


//-1.Export components
export default App;