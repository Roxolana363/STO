import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <>
    <p className="contact">контакти</p>
     <div className="row">
       <div className="col col-sm-6 col-md-3">
          <h5 className="BigText Roboto-Bold">MakSi< /h5>
          <p className="SmalText Roboto-Light">Ми поможемо справитись з вашими
          проблемами без переплат і стрсу </p>
       </div>
       <div className="col col-sm-6 col-md-3">
         <h5 className="BigText Roboto-Bold">МЕНЮ</h5>
         <a href="/Головна" className="contText Roboto-Light">Головна</a>< br />
         <a href="/Наші послуги" className="contText Roboto-Light">Наші послуги</a>< br />
         <a href="/Про нас" className="contText Roboto-Light">Про нас</a>< br />
      </div>
      <div className="col col-sm-6 col-md-3">
        <h5 className="BigText Roboto-Bold">КОНТАКТИ< /h5>
        <p className="SmalText Roboto-Regular"> Адрес:</p>
        <p className="SmalText Roboto-Light">Львів, вул. Кульпарківська, 59</p>
        <p className="SmalText Roboto-Regular">Телефони:</p>
         <p className="SmalText Roboto-Light">380 97 13 45 624< br />
                                              380 93 45 74 778
        </p>
        <p className="SmalText Roboto-Regular">E-mail:</p>
        <p className="SmalText Roboto-Light">autositeservice@gmail.com</p>
     </div>
     <div className="col col-sm-6 col-md-3">
       <h5 className="BigText Roboto-Bold">График работи< /h5>
       <p className="SmalText Roboto-Regular"> График работы:</p>
       <p className="SmalText Roboto-Light">Від 9:00 до 19:00< br />
                                             Від Понеділка до Суботи
       </p>
    </div>
  </div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.8242312232796!2d23.988089515708932!3d49.826968679394135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae77eb34ab94f%3A0xb9186b7f3de22971!2z0YPQuy4g0JrRg9C70YzQv9Cw0YDQutC-0LLRgdC60LDRjywgNTksINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1603291317708!5m2!1sru!2sua"
    title="Map" className="Map"></iframe>

    </>
  )
}

export default Contact;
