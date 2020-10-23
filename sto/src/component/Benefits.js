import React, {Component} from 'react';
import './Benefits.css';
import Advantage from './Advantage.js';
import Mask from '../img/Mask Group 22.png';


//
// export default class Benefits extends Component {
// constructor(props){
//   super(props);
//   this.state = {
//     error: null,
//     isLoaded: false,
//     items: []
//   };
// }
//
// componentDidMount() {
//   fetch("/get-calc-data")
//   .then (res => res.json())
//   .then(
//     (result) => {
//       this.setState({
//           isLoaded: true,
//           items: result.data
//       });
//     },
//     (error) => {
//       this.setState({
//         isLoaded: true,
//         error
//       });
//     }
//   )
// }
//
//   render() {
//     const { error, isLoaded, items} = this.state;
//     if (error) {
//       return <div> Error {error.message} </div>
//     } else if (!isLoaded) {
//       return <div> Loading . . . </div>
//     } else {
//       return (
//       <ul>
//        {items.map(item => (
//          <li key={item.id}>
//          {item.text}
//          </li>
//        ))}
//         </ul>
//
//       );
//     }
//   }
// }



export default class Benefits extends Component {
  render(){
  let Advantages =  [
    {id:"3A", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkAVdp1Ti7hlhfcW2G2rc6sJlE0PAPbFLNlA&usqp=CAU", num:"4p.", text:"Років успішної роботи"},
    {id:"4A", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1vDOz528xRWxL3stzqVO-9k1gsj8m1wxt1g&usqp=CAU", num:"11", text:"Першокласних фахівців"},
    {id:"5A", img:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31039567.jpg", num:"86", text:"Відремонтованих машин"},
    ]
    return(
      <div className="container-fluid">
       <img className="Mask" src={Mask} alt="Mask" />
       <div  className="AD">
          {Advantages.map((item, index) =>(
          <Advantage key={item.id} adinfo={item}/>
          ) )}
      </div>
    </div>
    );
  }
}
