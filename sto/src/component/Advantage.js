import React, {Component} from 'react';
import './Advantage.css';


export default class Advantage extends Component {
  render(){
    return(
      <div className="card inline advantage">
    <div className="card-body" href="/">
      <img src={this.props.adinfo.img} className="Adimg" alt="Adimg" />
      <p>{this.props.adinfo.num}</p>
      <p className="card-text">{this.props.adinfo.text}</p>
    </div>
    </div>
    )
  }
};
