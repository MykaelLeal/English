import React, { useState } from "react";

import {Link} from 'react-router-dom';

import logo from '../assets/logo_unifacisa.png';

import '../styles/register.css';

const Register = () =>  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form">
            <span className="register-form-title">Create Account</span>

            <span className="register-form-title">
              <img src={logo} alt="logo" />
            </span>

            <div className="wrap-input-register">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>


            <div className="wrap-input-register">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input-register">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-register-form-btn">
              <Link to = "/" className="register-form-btn">Create Account</Link>   
            </div>

            <div className="text-center">
              <span className="txt1">Already have an account?</span>
              <Link className="txt2" to="/">
              Login
              </Link>
            </div>
            </form>
            </div>
        </div>
      </div>
      

  )
}

export default Register;