import React from 'react'
import './Header.css';
import logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt=""/>
    </header>
  );
}

export default Header;
