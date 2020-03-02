import React from 'react';

export class Counter extends React.Component {

    handleChange(delta) {
        console.log("handleChange");
        this.setState(prevState => ({score: this.state.score + delta}));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
            </div>
        );
    };
};