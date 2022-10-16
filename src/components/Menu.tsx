import React from "react";
import "../blocks/menu.css";
import githubIcon from "../assets/images/github-social.svg";
import linkedinIcon from "../assets/images/linkedin-social.svg";

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
                <div className='menu__footer-links'>
                    <a
                        href='https://www.linkedin.com/in/amitbg/'
                        target={"_blank"}
                        rel='noreferrer'
                        className='menu__link'>
                        <img
                            className='menu__social menu__social_linkedin'
                            src={linkedinIcon}
                            alt='linkedin icon'
                        />
                    </a>
                    <a
                        href='https://github.com/AmitGit217'
                        target={"_blank"}
                        rel='noreferrer'
                        className='menu__link'>
                        <img
                            className='menu__social'
                            src={githubIcon}
                            alt='github icon'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
