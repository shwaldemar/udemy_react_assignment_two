import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    text: ""
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Assignment 2</h1>
        </header>
        <input
        onChange={this.handleInput}>
        </input>

        <p className="App-intro">
        {
          this.state.text.length >= 5 ?
          "Text long enough" : "Text too short"
        }
        </p>
      </div>
    );
  }
}

export default App;
