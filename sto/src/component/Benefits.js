import React, {Component} from 'react';
import './Benefits.css';
import Advantage from './Advantage.js';
import Mask from '../img/Mask Group 22.png';

export default class Benefits extends Component {
  render(){
    return(
      <div className="container-fluid">
       <img className="Mask" src={Mask} alt="Mask" />
       <div className="BN">
       < Advantage />
       </div>
    </div>
    );
  }
}
