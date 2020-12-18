import React from 'react';
import './App.css'

const Tweet = (props) => {
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>Esto es un tweet :)</p>
            <h3>Likes:</h3>
        </div>
    );
}

export default Tweet;