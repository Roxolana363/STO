import React from 'react';
import './AddInformation.css';
import Carrousel from './Carrousel.js';


const AddInformation = () => {
    return(
     <div className=" AddContainer">
      <div  className="flex AddTextContainer">
        <h1 className="AddTitle MontserratAlternates-SemiBold">ДОДАТКОВА<br/> ІНФОРМАЦІЯ</h1>
           <p className="AddText Roboto-Light">Многие считают, что во время этого процесса лишь считывают показания двигателя, а также выявляют скрытые ошибки и отмотанный пробег. На самом деле, диагностика авто, цена на которую подойдет всем, покажет информацию и о других не менее важных поломках. В том числе,
сотрудники нашего автосервиса проведут следующие операции: считывание кодов неисправностей; визуальный осмотр мотора; проверка состояния подвески; комплексная оценка исправности тормозов; диагностика кузова; проверка кондиционера.
           </p>
      < /div>
<Carrousel />
    </div>
    );
  }

export default AddInformation;
