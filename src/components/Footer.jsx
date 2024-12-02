import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return ( 
    <div className="footer">
        <div className="arrondi">
            <img src="/bulle-bas.png" alt="Bulle d'information" />
        </div>
            <div className='contain-footer'>
                <div className="logo-adresse">
            <Link className="logo-blanc" to="/">
                    <img 
                        src="/Logo-blanc.png" 
                        alt="Logo Trouve ton artisan" 
                    />
                </Link>
                <div className='adresse'>
            <strong>Lyon</strong>
             <address>101 cours Charlemagne <br />
                    CS 20033<br />
                    69269 LYON CEDEX 02<br />
                    France<br />
                    <a href="tel:+330426734000">+33 (0)4 26 73 40 00</a>
                    </address>
                </div>
                </div>

<div className='line'>
                <svg viewBox="0 0 200 1" xmlns="http://www.w3.org/2000/svg">
  <line x1="1000" y1="0" x2="0" y2="0" stroke="white" /></svg>
</div>

<div className='contain-footer'>
    <p>Mentions légales</p>
    <p>Données personnelles</p>
    <p>Données Accessibilité : partiellement conforme</p>
    <p>Presse</p>
    <p>Marchés publics</p>
    <p>Venir à la Région</p>
    <p>Contacts</p>
    <p>Gestion des cookies</p>
</div>

    </div>
    </div>
)}

export default Footer;