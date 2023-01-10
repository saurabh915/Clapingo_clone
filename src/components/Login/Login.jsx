import React from "react";
import "./Login.css";

function handleClick(params) {}
function Login() {
  return (
    <button className="login" onClick={handleClick}>
      <div className="l-img"></div>
      <span>Login</span>
    </button>
  );
}

export default Login;
