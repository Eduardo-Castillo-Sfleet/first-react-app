import React from 'react';
import './App.css'

const Tweet = ({name, message}) => {
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{Math.floor((Math.random()*10)+2)}</h3>
        </div>
    );
}

export default Tweet;