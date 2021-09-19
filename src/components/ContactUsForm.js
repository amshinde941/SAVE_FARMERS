import React from "react";
import './Combined.css';
const ContactUsForm = () => {


  return (
    <>
      <p style={{padding:"5px"}} className="font-bold text-2xl">
        Send Us A Message
      </p>
      <div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="Name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="Email"
            placeholder="Email"
            type="text"
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            label="Your Message"
            placeholder="Your Message"
            type="text"
          />
        </div>
        <div style={{padding:"5px"}} >
          <button className="btn" onClick={onclick}>submit</button>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
