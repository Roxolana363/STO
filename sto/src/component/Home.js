import React, {Component} from 'react';
import './Home.css';
import Fon from '../img/sto.jpg';

export default class Home extends Component {
  render(){
    return(

      <div  className="image">
      <img className="fon" src={Fon} alt="fon"/>
        <h2 className="text1 MontserratAlternates-SemiBold">Високий</h2>
    <h1 className="text2 MontserratAlternates-SemiBold">професіоналізм</h1>
    <p className="text3 Roboto-Regular">У нас кваліфіковані спеціалісти<br /> зі стажем від 5 років.<br />
                         Які поможуть вам з любою проблемою
   </p>
    <h5 className="text4 MontserratAlternates-Regular">ЯКІСНІ< br /> АВТОЗАПЧАСТИНИ</h5>
    <h5 className="text5 MontserratAlternates-Regular">ШВИДКЕ < br /> ОБСЛУГОВУВАННЯ</h5>
    </div>

    );
  }
}
