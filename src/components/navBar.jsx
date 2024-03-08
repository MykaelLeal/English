import React from "react";

import logo from '../assets/logo_studio.png';
import '../styles/navBar.css';

const NavBar = () => {
   return(
     <div className="container_nav">
        <nav>
            <img src={logo} className="logo-image" alt="logo"/>
             <ul className="itens">
               <li>Início</li>
               <li>Jogos</li>
               <li>Sobre</li>
              <li>Contato</li>
             </ul>
        </nav>
     </div>
 

    )
}

export default NavBar;