import React, {Component} from 'react';
import Favors from './Favors.js';
import './Services.css';


export default class Services extends Component {
  render() {
    return(
      <div className="container">
        <h1 className="MakSi MontserratAlternates-Regular">Наші послуги MakSi </h1>
        <Favors />
      </div>
    )
  }
}
