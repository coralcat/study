import React from 'react';

export const Counter = (props) => {
    console.log(props);
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(props.id, -1)}> -
            </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={() => props.changeScore(props.id, 1)}> +
            </button>
        </div>
    );
};