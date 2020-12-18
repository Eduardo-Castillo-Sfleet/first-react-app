//0. Import libraries
import React, { useState } from 'react';
import Saludo from './saludo'
import Tweet from './Tweet'


//1. Create a component
const App = () => {

  const [isTitleBlue, setTitleBlue] = useState(false)
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState(true)

  const increment = () => {
    setCount(count+1)
    setTitleBlue(!isTitleBlue)
    setMensaje(!mensaje)
  }

  return(
    <div className="App">
      <h1 className={isTitleBlue ? 'titleBlue' : 'titleTweet'}>Sohamu tweets</h1>
      <div className="Tweets">
        <Tweet name="Armando" message={mensaje ? 'Hola sou nuevo' :'Me desactivaste):'}/>
        <Tweet name="Harland" message={mensaje ? 'Hola soy developer' :'Me desactivaste):'}/>
        <Tweet name="Ivonne" message={mensaje ? 'Hola soy diseñadora' :'Me desactivaste):'}/>
        <Tweet name="Abraham" message={mensaje ? 'Hola me gusta el front' :'a mi tambien):'}/>
      </div>
      <Saludo />
      <button onClick={increment} className="botonSaludo">Increment</button>
      <h3 className="contador">{count}</h3>
    </div>
  );
}


//-1.Export components
export default App;