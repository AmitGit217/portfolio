import React from "react";
import "../blocks/card.css";
export default function Card(props: {
    mainImage: string;
    about: string;
    stack: string[];
    link: string;
}) {
    return (
        <div className='card'>
            <span className='card__skills'>
                {props.stack.map((skill, index) => {
                    return (
                        <img
                            className='card__skill-image'
                            src={skill}
                            alt='tech skill'
                            key={index}
                        />
                    );
                })}
            </span>
            <img
                className='card__image'
                src={props.mainImage}
                alt='project pic'
            />
            <div className='card__bottom'>
                <p className='card__about'>{props.about}</p>
                <a
                    className='card__link'
                    href={props.link}
                    target='_blank'
                    rel='noreferrer'>
                    view-project
                </a>
            </div>
        </div>
    );
}
