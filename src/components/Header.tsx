import React from "react";
import "../blocks/header.css";
import burger from "../assets/images/burger.svg";
import exit from "../assets/images/exit-icon.svg";

function Header(props: { showMenuProp: any; showMenu: boolean }) {
    const handleMenuBool = () => {
        props.showMenuProp();
    };
    const icon = props.showMenu ? exit : burger;
    return (
        <div className='header'>
            <p className='header__name'>Amit Bar-Gil</p>
            <img
                className='header__menu-icon'
                src={icon}
                alt='burger-icon'
                onClick={handleMenuBool}
            />
        </div>
    );
}

export default Header;
