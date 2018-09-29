import React, { Component } from 'react';
import SJDS from './sjds';
import AddTroll from './AddTroll';

class App extends Component {

  state = {
    trolls: [
      { name: 'Yasuo', age: 22, league: 'Bronce', id: 1},
      { name: 'Zed', age: 18, league: 'Silver', id: 2},
      { name: 'Jax', age: 26, league: 'Gold', id:3 }
    ]
  }
  addtroll = (troll) =>{
    troll.id= Math.random();
    let trolls = [...this.state.trolls, troll];
    this.setState({
      trolls: trolls
    })
  }
  deleteTroll = (id) =>{
    let trolls = this.state.trolls.filter(troll => {
      return troll.id !== id
    });
    this.setState({
      trolls: trolls
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SJDS deleteTroll={this.deleteTroll} trolls={this.state.trolls} />
        <AddTroll addtroll={this.addtroll} />
      </div>
    );
  }
}

export default App;
