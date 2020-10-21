import React, { Component } from 'react';
import './Header.css';
import Group from "../img/Group.png";
import Home from './Home.js';
import About from './About.js';
import Benefits from './Benefits.js';
import Services from './Services.js';
import Information from './Information.js';
import Contact from './Contact.js';

function Link(props){
  return(
  <li className="nav-item">
<a className="nav-link text-light" href={props.info.url}>{props.info.label}</a>
  </li>
)};

export default class Header extends Component {
  render(){
    let Links = [
      {label:"Головна", url:"#Головна" },
      {label:"Про нас", url:"#Про нас" },
      {label:"Наші послуги", url:"#Наші послуги" },
      {label:"Контакти", url:"#Контакти" },
    ]
    return(
      <div className="container-fluid">
    <nav className = "navbar navbar-expand-sm  text-light  fixed-top navStyle" >
     <label href="/" ><img src={Group} heigth="30" width="30" className="" alt="Logo" /></label>
      <ul className="nav">
        {Links.map((item, index) =>(
          <Link key={item.label} info={item} />
        ) )}
      </ul>
      <div>+380 97 13 45 624</div>
    </nav>
    <div id="Головна">
    <Home />
    </div>
    <div id="Про нас">
    <About />
    < Benefits />
    </div>
    <div id="Наші послуги">
< Services />
<Information />
    </div>
    <div id="Контакти">
    < Contact />
    </div>
    </div>
    );
  }
}
