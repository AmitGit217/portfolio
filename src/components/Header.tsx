import React from "react";
import "../blocks/header.css";
import burger from "../assets/images/burger.svg";

function Header(props: { showMenuProp: any }) {
    const handleMenuBool = () => {
        props.showMenuProp();
    };
    return (
        <div className='header'>
            <p className='header__name'>Amit Bar-Gil</p>
            <img
                className='header__menu-icon'
                src={burger}
                alt='burger-icon'
                onClick={handleMenuBool}
            />
        </div>
    );
}

export default Header;