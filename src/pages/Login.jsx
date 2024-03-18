import React, { useState } from "react";

import {Link} from 'react-router-dom';

import logo from '../assets/logo_unifacisa.png';

import '../styles/login.css';

const Login = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Welcome</span>

            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>

            <div className="wrap-input-login">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input-login">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Link to = "/home" className="login-form-btn">Login</Link>   
            </div>

            <div className="text-center">
              <span className="txt1">No account?</span>
              <Link className="txt2" to="/register">
              Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;