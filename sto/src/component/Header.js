import React, { Component } from 'react';
import './Header.css';
import Group from "../img/Group.png";

export default class Header extends Component {
  render(){
    return(
      <div>
    <nav className = " bg-dark">
      <ul className="nav nav-tabs nav-justified ">
       <label href="/"><img src={Group} heigth="30" width="30" className="" alt="Logo" /></label>
        <li> <a className="nav-link" href="#Головна">Головна</a></li>
        <li> <a className="nav-link" href="#Про нас">Про нас</a></li>
        <li> <a className="nav-link" href="#Наші послуги">Наші послуги</a></li>
        <li> <a className="nav-link" href="#Контакти">Контакти</a></li>
      </ul>
    </nav>
    <div id="Головна">
    <p></p>
    </div>
    <div id="Про нас">
    <p></p>
    </div>
    <div id="Наші послуги">
    <p></p>
    </div>
    <div id="Контакти">
    <p></p>
    </div>
    </div>
    );
  }
}
