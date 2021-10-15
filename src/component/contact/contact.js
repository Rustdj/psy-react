import React from 'react';

import './contact.css';
import { BsTelegram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { SiWhatsapp } from 'react-icons/si';


import { setModal, modal } from 'react';

const Contact = () => {


    
    
    return (
        <div className="footer">

            <div className="footer-title">
                <h2>Контакты</h2>
            </div>
            <div className="footer-awesom">

            <button onClick={() => setModal({
              ...modal, modal: true
              })} >
                Отправить сообщение
            </button>
                    
                <div className="icons">
                    <a href="https://www.whatsapp.com/?lang=ru" target="blank"><SiWhatsapp fontSize='30px'/></a>
                    <a href="https://mail.ru/" target="blank"><BsEnvelope fontSize='30px'/></a>
                    <a href=""><FiPhoneCall fontSize='30px'/></a>
                    <a href="https://tlgrm.ru/" target="blank"><BsTelegram fontSize='30px'/></a>
                </div>
            </div>

        </div>
    )
}
    


export default Contact;