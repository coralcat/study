import React from 'react';

export class Counter extends React.Component {
    state = {
        score: 0
    };

    constructor(props) {
        super(props);
    };

    changeScore = (delta) => {
        console.log(this);
        this.setState(prevState => ({
            score: prevState.score + delta
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.changeScore(-1)}> -</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.changeScore(1)}> +</button>
            </div>
        );
    };
};