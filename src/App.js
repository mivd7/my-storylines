import React, { Component } from 'react';
import ChooseStory from './components/ChooseStory';
import StoryInProgress from './components/StoryInProgress';
import LandingPage from './components/layout/LandingPage';
import UserPortal from './components/auth/UserPortal';
import { Route, Link } from 'react-router-dom';
import './App.css';
import CreateStory from './components/CreateStory';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div>
            <Link to={`/`}>HOME</Link>
          <header className="App-header">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/portal" component={UserPortal}/>
          <Route exact path="/add" component={CreateStory} />
          <Route exact path="/stories" component={ChooseStory} />
          <Route exact path="/stories/:id" component={StoryInProgress} />
          </header>
          </div>
          <div>
            <footer className="App-footer">
            <iframe title="oasis" width="560" height="315" 
                    src="https://www.youtube.com/embed/HjNTu8jdukA" 
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <br/>
            © MIVD Web Development, 2019
            </footer>
          </div>
        </div>
    );
  }
}

export default App