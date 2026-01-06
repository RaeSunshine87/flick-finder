import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="hero__nav">
                <img
                    className="site-logo"
                    src={require('../Assets/FlickFinderLogo.png')}
                    alt="Flick Finder Logo"
                />
                <ul className="hero__nav-list">
                    <li className="hero__nav-item"><Link to="/">Home</Link></li>
                    <li className="hero__nav-item"><Link to="/find-your-flick">Find Your Flick</Link></li>
                    <li className="hero__nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Ensure this export statement is present

