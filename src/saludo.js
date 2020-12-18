import React from 'react';
import './App.css'

const Saludo = () => {

    const saludar = () => {
        alert('hello');
    }

    return(
        <div>
            <button onClick={saludar} className="botonSaludo">
                saludo
            </button>
        </div>
    );
}

export default Saludo;