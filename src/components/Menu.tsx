import React from "react";
import "../blocks/menu.css";
import Footer from "./Footer";

function Menu(props: { setMenu: any }) {
    return (
        <div className={`menu`}>
            <nav className='menu__nav'>
                <p
                    className='menu__item'
                    onClick={() => props.setMenu("about")}>
                    about_me
                </p>
                <p
                    className='menu__item'
                    onClick={() => props.setMenu("projects")}>
                    projects
                </p>
                <p className='menu__item'>contact</p>
            </nav>
            <Footer />
        </div>
    );
}

export default Menu;
