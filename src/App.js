import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Actors from './components/Actors';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar logo="Grammys 2019" first="Best Actors" second="Best Actresses" third="Best Films"/>

          <Route exact path="/" render={()=> <Home title="Oscar Winners" />} />
          <Route path="/Actors" component={Actors} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
