import React, { useState } from "react";

import unifacisa from '../assets/unifacisa-2.png';

import '../styles/home.css';

const Home = () =>  {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [character, setCharacter] = useState("");
  const [subject, setSubject] = useState("");
  const [factReport, setFactReport] = useState("");

  return (
    <>
    <div className="name-unifacisa">
        <img src={unifacisa} className="unifacisa-logo" alt="logo da unifacisa"/>
    </div>

    <div className="unifacisa-about">
       <p>
       The Unifacisa Ombudsman's Office is a mediating and democratic communication channel that welcomes complaints from students, 
       teachers, staff and the community in general. If you have any complaints, complaints, suggestions, requests or compliments, 
       please contact us by e-mail: ouvidoria@unifacisa.edu.br or if you prefer, fill in our form by clicking on the link below.
       </p>
    </div>

    <div className="container">
        <div className="container-form">
            <form className="form">

                <div className="wrap-input">
                <input
                    className={name !== "" ? "has-val input" : "input"}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Full Name"></span>
                </div>


                <div className="wrap-input">
                <input
                    className={occupation !== "" ? "has-val input" : "input"}
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Occupation"></span>
                </div>

                <div className="wrap-input">
                <input
                    className={phoneNumber !== "" ? "has-val input" : "input"}
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Phone Number"></span>
                </div>

                <div className="wrap-input">
                <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                <input
                    className={type !== "" ? "has-val input" : "input"}
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Type"></span>
                </div>

                
                <div className="wrap-input">
                <input
                    className={character !== "" ? "has-val input" : "input"}
                    type="text"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Character"></span>
                </div>

                <div className="wrap-input">
                <input
                    className={subject !== "" ? "has-val input" : "input"}
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Subject"></span>
                </div>

                <div className="wrap-input">
                <input
                    className={factReport !== "" ? "has-val input" : "input"}
                    type="text"
                    value={factReport}
                    onChange={(e) => setFactReport(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Fact Report"></span>
                </div>

                <div className="container-form-btn">
                <button className="form-btn">Send</button>
                </div>

            </form>
            </div>
        </div>

        </>
    );
    }

export default Home;