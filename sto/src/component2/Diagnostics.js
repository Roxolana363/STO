import React from 'react';
import './Diagnostics.css';
import Worker from '../img/Mask Group 22.png';

const Diagnostics = () => {
    return(
     <div>
          <img src={Worker} alt="Worker" className="Worker" />
          <div className="ContDiag">
          <h1 className="HDiag MontserratAlternates-SemiBold">ДИАГНОСТИКА</h1>
             <p className="TDiag Roboto-Light">Якщо вас цікавить діагностика авто, то замовити її можна в нашому СТО. Ми гарантуємо вам ретельне виконання всіх робіт, завдяки Яким можна буде професійно перевірити ваш автомобіль на наявність будь-яких неполадок. Ми використовуємо тільки високотехнологічне обладнання, яке дозволяє виявити як дрібні, так і великі несправності машини
            </p>
</div>
    </div>
    );
  }

export default Diagnostics;
