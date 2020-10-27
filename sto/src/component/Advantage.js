import React from 'react';
import './Advantage.css';
import Clock1 from '../img/Orion_wall-clock.png';
import Boy from '../img/Orion_boy.png';
import Tool1 from '../img/Group 3025.png';

function AdvantageBox({src, num, data}) {
  return (
    <>
    <div className=" BoxBoxes">
    <div className="AdvantageBox">
    <img src={src} alt="AdvantageImg"  className="AdvantageImg"/>
    <p className=" card-text Roboto-Regular">{num}</p>
    <p className="card-text Roboto-Regular">{data}</p>
   </div>
   </div>
    </>
  )
}

const Advantage = () => {
  return (
    <>
    <AdvantageBox src={Clock1} num="4р." data="Років успішної роботи" />
    <AdvantageBox src={Boy} num="11" data="Фахівців" />
    <AdvantageBox src={Tool1} num="86" data="Відремонтованих машин" />
        </>
  )
}

export default Advantage;
