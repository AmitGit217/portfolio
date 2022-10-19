import React from "react";
import "../blocks/menu.css";
import "../blocks/menu-comp.css";

function MenuComp(props: { showActiveNav: any; activeNow: string }) {
    return (
        <div className={`menu-comp`}>
            <nav className='menu-comp__nav'>
                <p
                    onClick={() => props.showActiveNav("home")}
                    className={`menu-comp__item ${
                        props.activeNow === "home" && "menu-comp__item_active"
                    }`}>
                    home
                </p>
                <p
                    onClick={() => props.showActiveNav("about")}
                    className={`menu-comp__item ${
                        props.activeNow === "about" && "menu-comp__item_active"
                    }`}>
                    about_me
                </p>
                <p
                    onClick={() => props.showActiveNav("projects")}
                    className={`menu-comp__item ${
                        props.activeNow === "projects" &&
                        "menu-comp__item_active"
                    }`}>
                    projects
                </p>
                <p
                    onClick={() => props.showActiveNav("contact")}
                    className={`menu-comp__item ${
                        props.activeNow === "contact" &&
                        "menu-comp__item_active"
                    }`}>
                    contact
                </p>
            </nav>
        </div>
    );
}

export default MenuComp;
