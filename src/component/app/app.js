import Header from '../header/header';
import HeaderTitle from '../header-title/header-title';
import Background from '../background/background';
import Article from '../articles/articles';
import Consultation from '../consultation/consultation';
import Contact from '../contact/contact';
import AboutMe from '../aboutMe/aboutMe';
import Education from '../education/education';


import './app.css';





function App() {
    return (
      <div className="App">
          <Header/>
          <HeaderTitle/>
          <Background/>
          <AboutMe/>
          <Education/>
          <Contact/>
      </div>
    );
  }
  
  export default App;