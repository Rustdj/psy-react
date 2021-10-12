
import './header-title.css';

import imageLogo from './logo-es.png';


const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <div className='divider'></div>
            <div className='headerWrapper'>
                <img className='imageLogo' src={imageLogo} alt='logo'></img>
                    <div className='sub-title'>
                        <h3><u>Ekaterina  Sakovich</u></h3>
                    <h1>Практикующий<div></div> психолог</h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderTitle;