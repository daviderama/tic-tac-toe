import React from 'react';

function PlayAgain(props) {
    const text = 'Play Again!';
    return (
        <button className="play-again-button" onClick={ () => props.onClick() } >
            {text}
        </button>
    );
}

export default PlayAgain;
