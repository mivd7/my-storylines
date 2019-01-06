import React, { Component } from 'react';
import startStory from './components/startStory'
import Header from './layout/Header'
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <header className="App-header">
         <Route exact path="/" component={Header} />
         <Route exact path="/start" component={startStory} />
        </header>
        </div>
      </div>
    );
  }
}

export default App;
