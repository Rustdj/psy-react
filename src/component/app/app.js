import Header from '../header/header';
import HeaderTitle from '../header-title/header-title';
import Background from '../background/background';
import Article from '../articles/articles';
import Consultation from '../consultation/consultation';
import Contact from '../contact/contact';
import AboutMe from '../aboutMe/aboutMe';
import Education from '../education/education';


import './app.css';
import Modal from '../modal/modal';
import { useState } from 'react';





function App() {

  const [modal, setModal] = useState({
    modal: false
  })

    return (
      <div className="App">
          <Header/>
          <HeaderTitle/>
          <Background/>
          <AboutMe/>
          <Education/>
          <Contact/>
          <Modal
            title={'Modal Title'}
            isOpened={modal.modal}
            onModalClose ={() => setModal({...modal,modal: false})}
          >
          </Modal>

          <button onClick={() => setModal({
              ...modal, modal: true
              })} >
                Отправить сообщение
          </button>

              
          </div>
    );
  }
  
  export default App;