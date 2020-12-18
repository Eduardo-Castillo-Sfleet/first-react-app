//0. Import libraries
import React, { useState } from 'react';
import Saludo from './saludo'
import Tweet from './Tweet'


//1. Create a component
const App = () => {

  const [isTitleBlue, setTitleBlue] = useState(false)
  const [count, setCount] = useState(0);

const increment = () => {
  setCount(count+1)
  setTitleBlue(!isTitleBlue)
}

  return(
    <div className="App">
      <h1 className={isTitleBlue ? 'titleBlue' : 'titleTweet'}>Sohamu tweets</h1>
      <div className="Tweets">
        <Tweet name="Armando" message="Soy nuevo"/>
        <Tweet name="Harland" message="Soy de desarrollo"/>
        <Tweet name="Ivonne" message="Soy de UX"/>
        <Tweet name="Abraham" message="Yo también desarrollo"/>
      </div>
      <Saludo />
      <button onClick={increment} className="botonSaludo">Increment</button>
      <h3 className="contador">{count}</h3>
    </div>
  );
}


//-1.Export components
export default App;