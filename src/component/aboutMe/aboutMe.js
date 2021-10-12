
import avatar from './photo.png';

import './aboutMe.css';


const AboutMe = () => {
    return (
        <div className="container">
            <div class="about-title">
                <h1>Обо мне</h1>
            </div>
            <div class="about-wrapper">
                <div class="about-item">
                    <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt 
                        mollit anim id est laborum."
                    </p>
                </div>
                <div class="about-img">
                    <img src={avatar} alt="photo"/>
                </div>
            </div>
            <div class="about-descr">
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;
