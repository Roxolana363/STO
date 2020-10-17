import React, { Component } from 'react';
import './Header.css';
import Group from "../img/Group.png";

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
    <p> element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent</p>
    </div>
    <div id="Про нас">
    <p></p>
    </div>
    <div id="Наші послуги">
    <p> element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent element that is the second p element of its parent</p>
    </div>
    <div id="Контакти">
    <p></p>
    </div>
    </div>
    );
  }
}
