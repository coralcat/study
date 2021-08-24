import React from "react";

// eslint-disable-next-line no-undef
export class AddPlayerForm extends React.Component {
    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder="enter a player's name" value={this.state.value}
                       onChange={this.handleValueChange}/>
                <input className="input" type="submit" value="Add Player"/>
            </form>
        )
    }
}