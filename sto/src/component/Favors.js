import React from 'react';
import './Favors.css';
import Option1 from '../img/Group 476.png';
import Option2 from '../img/Group 3039.png';
import Option3 from '../img/Group 3040.png';
import Option4 from '../img/Group 3044.png';
import Option5 from '../img/Group 3043.png';
import Option6 from '../img/Group 3042.png';
import Option7 from '../img/Group 3041.png';
import Option8 from '../img/Group 3045.png';
import { Link } from "react-router-dom";



function Favor({src, text, link}) {
  return (
    <Link to={link}>

    <div className="card inline FavCard ">
    <img src={src} alt="favor"  className="FavImg"/>
    <p className="FavText Roboto-Regular">{text}</p>
    </div>

    </Link>
  )
}

const Favors = () => {
  return (
    <>
    <Favor src={Option1} link="/header-diag" text="РЕМОНТ"/>
    <Favor src={Option2} link="/" text="ПЛАНОВО ТО"/>
    <Favor src={Option3} link="/" text="ШИНОМОНТАЖ" />
    <Favor src={Option4} link="/" text="ДИАГНОСТИКА"   />
    <Favor src={Option5} link="/" text="РАЗВАЛ-СХОЖДЕНИЕ"  />
    <Favor src={Option6} link="/" text="УСЛУГИ АВТОЕЛЕКТРИКА" />
    <Favor src={Option7} link="/"  text="КУЗОВНЫЕ РАБОТЫ"   />
    <Favor src={Option8} link="/" text="МОЙКА И ДЕТЕЙЛИНГ"/>
    </>
  )
}

export default Favors;
