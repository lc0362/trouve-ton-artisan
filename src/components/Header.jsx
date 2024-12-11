import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img 
                        src="/Logo.png" 
                        alt="Logo Trouve ton artisan" 
                        className="navbar-logo"
                    />
                </Link>
                <div className="header-lg-right">
<div className="loupe-menu">
                {/* Barre de recherche */}
                <form className="d-none d-lg-flex search-bar ms-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Search"
                    />
                    <i className="bi bi-search"></i> {/* Icône Bootstrap pour la loupe */}
                    
                </form>
<div className='search-menu-mobile'>
                {/* Icône loupe pour mobile */}
                <button 
                    className="btn btn-link d-lg-none search-icon" 
                    type="button"
                    aria-label="Rechercher"
                >
                    <i className="bi bi-search icon-loupe"></i> {/* Icône Bootstrap pour la loupe */}
                </button>

                {/* Menu burger */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <div className="icon-menu-container">
                   <HiMenuAlt2 className="icon-burger" /> {/* Icône React pour le menu */}
                   <span className="menu-text">Menu</span>
                   </div>
                </button>
                </div>
                </div>
                {/* Liens de navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to="/">Bâtiment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to="/realisations">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1" to="/blog">Alimentation</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
