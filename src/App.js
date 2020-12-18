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
      <h1 className="titleTweet">Sohamu tweets</h1>
      <div className="Tweets">
        <Tweet name="Armando" message="Soy nuevo"/>
        <Tweet name="Harland" message="Soy de desarrollo"/>
        <Tweet name="Ivonne" message="Soy de UX"/>
        <Tweet name="Abraham" message="Yo también desarrollo"/>
      </div>
      <Saludo />
    </div>
  );
}


//-1.Export components
export default App;