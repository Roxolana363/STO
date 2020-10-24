import React, { Component } from 'react';
import './Header.css';
import Group from "../img/Group.png";
import Home from './Home.js';
import About from './About.js';
import Benefits from './Benefits.js';
import Services from './Services.js';
import Information from './Information.js';
import Contact from './Contact.js';
import HeaderDiag from '../component2/HeaderDiag.js';

import {Navbar, Nav, Container} from 'react-bootstrap';



export default class Header extends Component {
  render(){
    return(
      <>
    <Navbar  collapseOnSelect expand="md" variant="dark"  className="navStyle fixed-top">
      <Container>
        <Navbar.Brand href="/" >
          <img
             src={Group}
             heigth="30"
             width="30"
             className="d-inline-block align-top"
             alt="Logo"
           />
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                  <Nav.Link href="#Головна" className="text-light">Головна</Nav.Link>
                  <Nav.Link href="#Про нас" className="text-light">Про нас</Nav.Link>
                  <Nav.Link href="#Наші послуги" className="text-light">Наші послуги</Nav.Link>
                  <Nav.Link href="#Контакти" className="text-light">Контакти</Nav.Link>
              </Nav>
              <div>+380 97 13 45 624</div>
           </ Navbar.Collapse>
      </Container>
    </Navbar>


    <div className="container-fluid">
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
    <div>
    < HeaderDiag />
    </div>
      </div>


    </>
    );
  }
}
