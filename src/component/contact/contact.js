
import './contact.css';


const Contact = () => {
    return (
        <div className="container">
            <div className="footer-title">
                <h2>Контакты</h2>
            </div>
            <div className="footer-awesom">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Отправить сообщение</button>
                <div className="icons">
                    <a href="https://www.whatsapp.com/?lang=ru" target="blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a href="https://mail.ru/" target="blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-phone" aria-hidden="true"></i></a>
                    <a href="https://tlgrm.ru/" target="blank"><i className="fa fa-telegram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;