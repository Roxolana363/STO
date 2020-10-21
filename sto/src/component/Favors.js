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


function Favor({src, text, link}) {
  return (
    <>

    <div href={link} className="card inline FavCard ">
    <img src={src} alt="favor"  className="FavImg"/>
    <p className="FavText Roboto-Regular">{text}</p>
    </div>

    </>
  )
}

const Favors = () => {
  return (
    <>
    <Favor src={Option1} text="РЕМОНТ" link="https://dev-gang.ru/article/integriruite-krasivye-karty-google-v-svoi-proekt-react-49y49uxwm8/"/>
    <Favor src={Option2} text="ПЛАНОВО ТО"  link="/Головна" />
    <Favor src={Option3} text="ШИНОМОНТАЖ"   link="/Головна" />
    <Favor src={Option4} text="ДИАГНОСТИКА"   link="/Головна" />
    <Favor src={Option5} text="РАЗВАЛ-СХОЖДЕНИЕ"  link="/Головна" />
    <Favor src={Option6} text="УСЛУГИ АВТОЕЛЕКТРИКА"  link="/Головна" />
    <Favor src={Option7} text="КУЗОВНЫЕ РАБОТЫ"  link="/Головна" />
    <Favor src={Option8} text="МОЙКА И ДЕТЕЙЛИНГ"   link="/Головна" />
    </>
  )
}

export default Favors;
