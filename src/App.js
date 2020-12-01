import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

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

      {/*<p className="App-intro">
        {
          this.state.text.length >= 5 ?
          "Text long enough" : "Text too short"
        }
        </p>*/}
        <ValidationComponent textLength={this.state.text.length}/>
        <CharComponent />

      </div>
    );
  }
}

export default App;
