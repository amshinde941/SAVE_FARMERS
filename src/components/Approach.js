import React, { Component } from "react";
import { Fade } from 'react-reveal';
import {GiFarmTractor, GiPlantRoots, GiReceiveMoney} from 'react-icons/gi';
class Approach extends Component {
    render() {
      return (
        <div className="approach m-20 ">
          <Fade bottom duration={2000} distance="200px">
            <div className="approach-content grid justify-content-center" >
               <h1>OUR APPROACH</h1>
                  <h3>We address systemic change and scalability
                        challenges facing our food and agriculture systems.
                        We focus on 3 pillars.
                  </h3>
            </div>
            <div className="icons ">
                <div  className="grid justify-items-center info bg-yellow-100">
                    <GiFarmTractor style={{fontSize:"4em"}} />
                    <h3 style={{paddingBottom:"1em"}}>AWARENESS</h3>
                    <p>Storytelling builds bridges. Our coalitions are catalysts toward change. </p>
                </div>
                <div  className="grid justify-items-center info bg-yellow-100">
                    <GiPlantRoots style={{fontSize:"4em"}} />
                    <h3 style={{paddingBottom:"1em"}}>EDUCATION</h3>
                    <p>Expanding regenerative learning opportunities.</p>
                </div>                
                <div  className="grid justify-items-center info bg-yellow-100">
                    <GiReceiveMoney style={{fontSize:"4em"}} />
                    <h3 style={{paddingBottom:"1em"}}>ECONOMICS</h3>
                    <p>Financial incentives that support regenerative land management.</p>
                </div>            
            </div>
          </Fade>
        </div>
        );
    }
}
export default Approach;