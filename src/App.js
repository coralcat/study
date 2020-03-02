import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Player} from './components/Player'


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
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

  render() {
    return (
        <div className="scoreboard">
          <Header title="My scoreboard" totalPlayers={this.state.players.length}/>

          {/*Players List*/}
          {this.state.players.map(player =>
              <Player name={player.name} score={player.score} removePlayer={this.handleRemovePlayer} key={player.id} id={player.id}/>)}
        </div>
    );
  };
}


export default App;
