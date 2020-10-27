import React from 'react';
import './DiagnosticServices.css';
import Service1 from '../img/Group 514.png';
import Service2 from '../img/Group 516.png';
import Service3 from '../img/Group 513.png';
import Service4 from '../img/Group 517.png';


function Services({src, text}) {
  return (
    <>
    <div className="RowCont">
    <div className="row">
    <img src={src} alt="Services"  className="col col-sm-3 SImg"/>
    <p className="col col-sm-9 ColText Roboto-Regular">{text}</p>
    </div>
    </div>

    </>
  )
}

const DiagnosticServices = () => {
  return (
    <>
    <div className="ServiceContainer">
    <h1 className="ServiceTitle MontserratAlternates-SemiBold" >Які послуги пропонуємо</h1>
    <p className="ServiceText Roboto-Light">Процедура включає в себе діагностику всіх систем автомобіля на наявність відхилень від норми.</p>
    <Services src={Service1} text="КОМП'ЮТЕРНА ДІАГНОСТИКА"/>
    <Services src={Service2} text="ДІАГНОСТИКА ХОДОВИЙ ЧАСТИНИ"/>
    <Services src={Service3} text="ДІАГНОСТИКА ДВИГУНА" />
    <Services src={Service4} text="ПРОВЕРКА ТЕХНИЧЕСКИХ ЖИДКОСТЕЙ"   />
    </div>
    </>
  )
}

export default DiagnosticServices;
