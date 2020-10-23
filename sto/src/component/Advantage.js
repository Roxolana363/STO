import React, {Component} from 'react';
import './Advantage.css';


export default class Advantage extends Component {
  render(){
    return(
      <div className="d-inline-flex advantage">
        <div>
           <img src={this.props.adinfo.img} className="Adimg" alt="Adimg" />
           <p>{this.props.adinfo.num}</p>
           <p className="card-text Roboto-Regular">{this.props.adinfo.text}</p>
       </div>
    </div>
    )
  }
};
