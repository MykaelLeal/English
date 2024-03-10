import React, {useEffect} from "react";

import ScrollReveal from "scrollreveal";

import '../styles/about.css';

const About = () => {

    useEffect(() => {

        ScrollReveal().reveal('.title-about', { duration: 2000 });
        ScrollReveal().reveal('.title-name', { duration: 2000 });
        ScrollReveal().reveal('.card-about', {
          rotate: { x: 0, y: 80, z: 0 },
          duration: 2000,
        });
        ScrollReveal().reveal('.card-text-about', { duration: 2000 });
      }, []); 

  

  return(
      <section className="section-about">
          <h2 className="title-about">Sobre a </h2>
          <h2 className="title-name">TRINITIX STUDIO</h2>
          <div className="about">
              <div className="card-about">
                  <div className="card-text-about">
                    <p className="about-text">A Trinitix Studios foi fundada por dois amigos, 
                        apaixonados por games, com a intenção de trazer experiências memoráveis para os jogadores. 
                        Nossa jornada começou com um sonho compartilhado de criar mundos vibrantes e histórias envolventes que unissem pessoas em todo o mundo, 
                        resultando em um estúdio que valoriza a criatividade, a inovação e a conexão humana. Nós acreditamos que, 
                        em nossa jornada, estamos construindo algo verdadeiramente único e especial que toca os corações e inspira as mentes de nossos jogadores, 
                        levando-os em uma jornada emocionante de auto descoberta e aventura.</p>
              </div>
          </div>
                  
              <div className="card-image">
              </div>
        </div>

      </section>
      





  )};

export default About;