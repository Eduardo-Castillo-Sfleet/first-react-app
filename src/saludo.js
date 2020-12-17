import React from 'react';

const Saludo = () => {

    const saludar = () => {
        alert('hello');
    }

    return(
        <div>
            <button onClick={saludar}>
                saludo
            </button>
        </div>
    );
}

export default Saludo;