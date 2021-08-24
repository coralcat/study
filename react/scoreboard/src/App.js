import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Player} from './components/Player'
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component {
    state = {
        players: [
            {name: 'sori', score: 86, id: 1},
            {name: 'miki', score: 99, id: 2},
            {name: 'doro', score: 82, id: 3},
            {name: 'bori', score: 74, id: 4},
            {name: 'sanho', score: 33, id: 5},
        ]
    };

    handleRemovePlayer = (id) => {
        console.log(id);
        this.setState(prevState => {
            return {
                players: prevState.players.filter(item => item.id !== id)
            }
        })
    };

    handleChangeScore = (id, delta) => {
        console.log('changeScore', id, delta);
        this.setState(prevState => {
            const players = [...prevState.players];
            players.forEach(player => {
                if (player.id === id) {
                    player.score += delta;
                }
            });
            return {players}
        })
    };

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            const maxId = prevState.players.reduce((max, player) => {
                return max > player.id ? max : player.id;
            }, 0);

            return {
                players: [ ...prevState.players, {
                    id: maxId + 1, name, score: 0
                }]
            }
        })
    };

    render() {
        return (
            <div className="scoreboard">
                <Header title="My scoreboard" players={this.state.players}/>

                {
                    this.state.players.map(player =>
                        <Player name={player.name} score={player.score} changeScore={this.handleChangeScore} removePlayer={this.handleRemovePlayer}
                                key={player.id} id={player.id}/>)
                }
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    };
}


export default App;
