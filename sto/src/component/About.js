import React, {Component} from 'react';
import './About.css';
import HardWorker from '../img/Mask Group 25.jpg';


export default class About extends Component {
  render(){
    return(
     <div>
     <h1 className="text6 MontserratAlternates-SemiBold">Чому вам <br />варто вибрати нас ?</h1>
     <p className="text7 Roboto-Light">The brand’s hallmark authentic materials and colours are used, such as rose gold<br />
                          on the trim elements, or the surfaces which come into contact with the skin,<br />
                          featuring a lavish, quilted crystal white nappa leather finish. In this luxury<br />
                          technique, familiar among other things from Chesterfield furniture, the leather is<br />
                          put into folds in a diamond pattern and secured to the frame with buttons.

    </p>
    <img src={HardWorker} alt="HardWorker" className="HardWorker" />
     </div>

    );
  }
}
