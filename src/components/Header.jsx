import React from 'react';
import '../style/Header.css';
import logo from '../assets/imgs/calculator-logo.svg';
import bars from '../assets/imgs/bars.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <h1 className="header-title">Calculator</h1>
            <div className="menu"><img src={bars} alt="bars"/></div>
        </header>
    );
};

export default Header;