import React, {useEffect} from "react";

import ScrollReveal from "scrollreveal";

import Icone from '../assets/instagram.png';

import '../styles/footer.css';

const Footer = () => {

    useEffect(() => {

        ScrollReveal().reveal('.footer-title', { duration: 2000 });
        ScrollReveal().reveal('.email', { duration: 2000 });
        ScrollReveal().reveal('.card-about', {
          rotate: { x: 0, y: 80, z: 0 },
          duration: 2000,
        });
        ScrollReveal().reveal('.card-text-about', { duration: 2000 });
      }, []); 

      const InstaApp = () => {
           const username = 'trinitix_studio';
           const instagramUrl = `https://www.instagram.com/${username}?igsh=MThncHU1Z3dva2NsOQ==`;
           window.open(instagramUrl, '_blank');
          
        };
        
         



    return(
        <footer>
            <div className="footer-container">
              <h1 className="footer-title">Contato</h1>
              <p className="email">trinitixstudios@gmail.com</p>
             
        
              <img src={Icone} className="icone" onClick={InstaApp} alt="Icone do Instagram"/>

         
            </div>

        </footer>
















    )};



export default Footer;