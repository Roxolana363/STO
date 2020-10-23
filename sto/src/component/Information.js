import React, {Component} from 'react';
import WaysToContact from './WaysToContact.js';
import './Information.css';
import Tools from '../img/Mask Group 24.png';


export default class Information extends Component {
  render() {
    return(
      <div className="container-fluid">
        <img src={Tools} alt="Tool" className="Tool" />
        <div className="WaysToContact">
        <WaysToContact  />
        </div>
      </div>
    )
  }
}
