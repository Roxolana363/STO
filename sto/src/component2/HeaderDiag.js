import React, { Component } from 'react';
import '../component/Header.css';
import Contact from '../component/Contact.js';
import Diagnostics from './Diagnostics.js';
import DiagnosticServices from './DiagnosticServices.js';
import AddInformation from './AddInformation.js';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default class Header extends Component {
  render(){
    return(
      <>
    <Navbar  collapseOnSelect expand="md" variant="dark"  className="navStyle fixed-top">
      <Container>
        <Navbar.Brand href="/" >MakSi</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                  <Nav.Link href="#" className="text-light">Головна</Nav.Link>
                  <Nav.Link href="#" className="text-light">Про нас</Nav.Link>
                  <Nav.Link href="#" className="text-light">Наші послуги</Nav.Link>
                  <Nav.Link href="#Контакти" className="text-light">Контакти</Nav.Link>
              </Nav>
              <div>+380 97 13 45 624</div>
           </ Navbar.Collapse>
      </Container>
    </Navbar>

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
      


    </>
    );
  }
}
