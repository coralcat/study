import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Player} from './components/Player'


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
    }

    handleChangeScore = (id, delta) => {
        console.log('changeScore', id, delta);
        this.setState(prevState => {
            const players = [...prevState.players];
            players.forEach(player => {
                if (player.id === id) {
                    player.score += delta;
                }
            })
            return {players}
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My scoreboard" totalPlayers={this.state.players.length}/>

                {
                    this.state.players.map(player =>
                        <Player name={player.name} score={player.score} changeScore={this.handleChangeScore} removePlayer={this.handleRemovePlayer}
                                key={player.id} id={player.id}/>)
                }
            </div>
        );
    };
}


export default App;
