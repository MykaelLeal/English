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
              </div>
          </div>
                  
              <div className="card-image">
              </div>
        </div>

      </section>
      





  )};

export default About;