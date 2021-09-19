import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Approach from './components/Approach';
import Mission from './components/Mission';
import Contact from './components/Contact';
import logo from './images/logo.png';
import Donate from './components/Donate';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <img src={logo} alt="savefarmers" href='#home'/>
          <div className="donate"><Donate/></div>
          <li><a href="#home" className="rounded">Home</a></li>
          <li><a href="#mission" className="rounded">Mission</a></li>
          <li><a href="#approach" className="rounded">Approach</a></li>
          <li><a href="#contactus" className="rounded">contact</a></li>
        </ul>
        <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="mission">
          <Mission/>
        </section>
        <section id="approach">
          <Approach/>
        </section>
        <section id="contactus">
          <Contact/>
        </section>
        </div>
      </div>
    );
  }
}

export default App;
