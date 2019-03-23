import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Actors from './components/Actors';
import Actresses from './components/Actresses';
import Films from './components/Films';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar logo="Oscars 2019" first="Best Actors" second="Best Actresses" third="Best Films"/>
          <Route exact path="/" render={()=> <Home title="Winners" />} />
          <Route exact path="/Actors" render={()=> <Actors />} />
          <Route exact path="/Actresses" render={()=> <Actresses />} />
          <Route exact path="/Films" render={()=> <Films />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App
