import React, { Component } from 'react';
import '../component/Header.css';
import Contact from '../component/Contact.js';
import Diagnostics from './Diagnostics.js';
import DiagnosticServices from './DiagnosticServices.js';
import AddInformation from './AddInformation.js';


function Link(props){
  return(
  <li className="nav-item">
<a className="nav-link text-light" href={props.info.url}>{props.info.label}</a>
  </li>
)};

export default class HeaderDiag extends Component {
  render(){
    let Links = [
      {label:"Головна", url:"#" },
      {label:"Про нас", url:"#" },
      {label:"Наші послуги", url:"#" },
      {label:"Контакти", url:"#Контакти" },
    ]
    return(
      <div className="container-fluid">
    <nav className = "navbar navbar-expand-sm  text-light  fixed-top navStyle" >
     <label href="/Header" >MakSi</label>
      <ul className="nav">
        {Links.map((item, index) =>(
          <Link key={item.label} info={item} />
        ) )}
      </ul>
      <div>+380 97 13 45 624</div>
    </nav>



    <div>
      <Diagnostics />
    </div>

    <div>
        <DiagnosticServices />
    </div>

    <div>
        <AddInformation />
    </div>

    <div id="Контакти">
    < Contact />
    </div>
    </div>
    );
  }
}
