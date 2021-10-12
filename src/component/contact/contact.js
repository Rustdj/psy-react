import React from 'react';

import './contact.css';
import { BsTelegram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { SiWhatsapp } from 'react-icons/si';



const Contact = () => {

    return (
        <div className="footer">
            <div class="footer-title">
                <h2>Контакты</h2>
            </div>
            <div class="footer-awesom">
                <button type="button" 
                    class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    data-bs-whatever="@getbootstrap">Отправить сообщение
                </button>
                <div class="icons">
                    <a href="https://www.whatsapp.com/?lang=ru" target="blank"><SiWhatsapp fontSize='30px'/></a>
                    <a href="https://mail.ru/" target="blank"><BsEnvelope fontSize='30px'/></a>
                    <a href=""><FiPhoneCall fontSize='30px'/></a>
                    <a href="https://tlgrm.ru/" target="blank"><BsTelegram fontSize='30px'/></a>
                </div>
            </div>


        {/* Modal */}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Напишите ваш вопрос</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form id="form"> 
                        <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Укажите email или телефон</label>
                        <input type="email" type="phone" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                        <label for="message-text" class="col-form-label">Опишите, что вас тревожит</label>
                        <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Отправить сообщение</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;