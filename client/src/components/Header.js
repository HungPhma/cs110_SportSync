import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../Photo/project2.png'; // Make sure to replace with the actual path to your logo
import '../App.css';
const Header = () => {
  return (
    <div className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
    </div>
  );
};

export default Header;
