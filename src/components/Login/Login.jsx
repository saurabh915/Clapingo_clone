import React from "react";
import "./Login.css";

function handleClick(params) {}
function Login(props) {
  return (
    <button className="login" onClick={handleClick}>
      <div className="l-img"></div>
      <span>{props.h}</span>
    </button>
  );
}

export default Login;
