import React from "react";
import "../blocks/menu.css";

function Menu(props: { showMenu: boolean }) {
    return (
        <div className={`menu ${props.showMenu && `menu_show`}`}>
            <nav className='menu__nav'>
                <p className='menu__item'>hello</p>
                <p className='menu__item'>about me</p>
                <p className='menu__item'>projects</p>
                <p className='menu__item'>contact</p>
            </nav>
            <div className='menu__footer'>
                <p className='menu__footer-caption'>find me in: </p>
            </div>
        </div>
    );
}

export default Menu;
