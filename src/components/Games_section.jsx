import React, {useEffect} from "react";

import ScrollReveal from 'scrollreveal';

import img1 from '../assets/slide-1.jpeg';

import '../styles/game_section.css';

const Games_section = () => {

        useEffect(() => {

          ScrollReveal().reveal('.title', { duration: 2000 });
          ScrollReveal().reveal('.card', {
            rotate: { x: 0, y: 80, z: 0 },
            duration: 2500,
          });
          ScrollReveal().reveal('.card-text', { duration: 2500 });
        }, []); 

    

    return(
        <section className="game-sections">
            <h2 className="title">NOSSOS JOGOS</h2>
            <div className="games">
                <div className="card">
                    <div className="card-text">
                       <img src={img1} alt="Primeiro jogo"/>
                       <h3>HEARTLESS CASE</h3>
                       <p>Jogo em Desenvolvimento</p>
                </div>
            </div>
                    
                <div className="card">
                </div>
                <div className="card"></div>
    
            </div>

        </section>
        





    )};

export default Games_section;