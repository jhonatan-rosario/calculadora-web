import React from 'react';
import '../style/Header.css';
import logo from '../assets/imgs/calculator-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <h1 className="header-title">Calculator</h1>
            <div className="menu"></div>
        </header>
    );
};

export default Header;