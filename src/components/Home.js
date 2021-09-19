import React, { Component } from "react";
import { Fade } from 'react-reveal';
import Donate from './Donate';
import './Combined.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Fade bottom duration={2000} distance="100px">
          <div className="component-content">
            <h1>Invest in a regenerative future.</h1>
            <h3>Your donation will create a ripple
            effect of regeneration supporting the health of our nation’s soil, food,
  people and planet..</h3>
            <Donate/>
          </div>
        </Fade>
      </div>
    );
  }
}
export default Home;
