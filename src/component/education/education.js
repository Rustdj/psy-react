
import './education.css';

import diplom from './dip.jpg';


const Education = () => {
    return (
        <div className="container">
            <div className="education-header">
                <h1>Образование</h1>
            </div>
            <div className="education-diplom">
                <h3><u>Lorem ipsum dolor</u></h3>
                <img src={diplom} alt="diplom"/>
            </div>
            <div className="education-diplom">
                <h3><u>Lorem ipsum dolor</u></h3>
                <img src={diplom} alt="diplom"/>
            </div>
            <div className="education-diplom">
                <h3><u>Lorem ipsum dolor</u></h3>
                <img src={diplom} alt="diplom"/>
            </div>
        </div>
    )
}

export default Education;