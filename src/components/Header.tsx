import React, { useState } from "react";
import "../blocks/header.css";
import burger from "../assets/images/burger.svg";
import exit from "../assets/images/exit-icon.svg";
import MenuComp from "./MenuComp";

function Header(props: {
    showMenu: any;
    handleActiveNav: any;
    activeNav: string;
}) {
    const [iconState, setIcon] = useState(true);
    const handleMenuBool = () => {
        !iconState ? props.showMenu("") : props.showMenu("menu");
        setIcon(!iconState);
    };

    const icon = iconState ? burger : exit;
    return (
        <div className='header'>
            <p className='header__name'>Amit Bar-Gil</p>
            <MenuComp
                showActiveNav={props.handleActiveNav}
                activeNow={props.activeNav}
            />
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
