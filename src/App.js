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
        <Header />
        </header>
        </div>
        <div>
        <main>
          <Route exact path="/start" component={startStory} />
        </main>
      </div>
      </div>
    );
  }
}

export default App;
