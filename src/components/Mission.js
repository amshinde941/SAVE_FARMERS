import React, { Component } from "react";
import { Fade } from 'react-reveal';
import './Combined.css';
class Mission extends Component {
  render() {
    return (
      <div className="mission">
        <Fade bottom duration={2000} distance="200px">
          <div className="component-content">
            <h1>OUR MISSION</h1>
            <h3>We are a coalition of farmers, educators,
            doctors, scientists, and business leaders
            aiming to expose the human and environmental
            impacts of chemical farming and offer a path
            forward through regenerative agricultural practices.
            </h3>
          </div>

        </Fade>
      </div>
    );
  }
}
export default Mission;