import React from "react";
import githubIcon from "../assets/images/github-social.svg";
import linkedinIcon from "../assets/images/linkedin-social.svg";
import "../blocks/menu.css";
export default function Footer() {
    return (
        <div className='menu__footer'>
            <p className='menu__footer-caption'>find me in: </p>
            <div className='menu__footer-links'>
                <div className='menu__social'>
                    <a
                        href='https://www.linkedin.com/in/amitbg/'
                        target={"_blank"}
                        rel='noreferrer'>
                        <img
                            src={linkedinIcon}
                            alt='linkedin icon'
                            className='menu__footer-image'
                        />
                    </a>
                </div>
                <div className='menu__social'>
                    <a
                        href='https://github.com/AmitGit217'
                        target={"_blank"}
                        rel='noreferrer'>
                        <img
                            src={githubIcon}
                            alt='github icon'
                            className='menu__footer-image'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
