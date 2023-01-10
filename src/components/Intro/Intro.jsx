import React from "react";
import Button from "./Button";
import "./Intro.css";
function Intro() {
  return (
    <div className="intro">
      <div className="i-right"></div>
      <div className="i-left">
        <div className="i-name">
          <h1>
            Hone your english speaking skills over <span style={{color: "#139980"}}>one-on-one</span> video call
          </h1>
          <span>
            Practice english conversation with excellent communuicators across
            the country and speak like a PRO 😎.
          </span>
        </div>
        <div className="i-button">
          <Button head = "Book a trial"  />
          <button className="i-b2">Download our app</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
