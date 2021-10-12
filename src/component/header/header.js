import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


import "./header.css"


const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className='header'>
            <a className='link' href='#'>Обо мне</a>
                <a className='link' href='#'>Образование</a> 
                    <Dropdown className='menu' isOpen={dropdownOpen}toggle={toggle}>
                        <DropdownToggle caret>Консультации</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='#'>Психотерапия</DropdownItem>
                            <DropdownItem href='#'>Психолог online</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                <a className='link' href='#'>Статьи</a>
             <a className='link' href='#'>Контакты</a>
        </div>


    )
}

export default Header;
