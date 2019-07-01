import React from 'react';
import './index.css';
import logo from './logo.png';


function Navbar () {
  return (
  <ul className="nav nav-style">
    <li className="nav-item">
      <img src={logo} alt="logo" className="Logo"/>
    </li>
     <li className="nav-item">
      <a href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija" target="_blank"> Full program </a>
     </li>
   </ul>
 );
}

export default Navbar;
