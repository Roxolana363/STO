import React from 'react';
import './WaysToContact.css';
import Call from '../img/Call.png';
import Mail from '../img/Mail.png';
import Clock from '../img/clock.png';
import Locate from '../img/Locate.png';



function Contacts({src, data1, data2}) {
  return (
    <>

    <div className="row Info d-inline-flex">
    <img src={src} alt="Contact"  className="col col-sm-6 col-md-3 ContImg"/>
    <div className="col col-sm-6 col-md-9">
    <p className="Data1">{data1}</p>
    <p className="Data2">{data2}</p>
    </div>
   </div>
    </>
  )
}

const WaysToContact = () => {
  return (
    <>
    <Contacts src={Call} data1="380 97 13 45 624" data2="380 97 13 45 624" />
    <Contacts src={Mail} data1="autositeservice@gmail.com" data2="autositeservice@gmail.com" />
    <Contacts src={Clock} data1="З 9:00 до 19:00" data2="Понеділка - Суботи" />
    <Contacts src={Locate} data1="Місто Львів" data2="вул. Кульпарківська, 59" />
    </>
  )
}

export default WaysToContact;
