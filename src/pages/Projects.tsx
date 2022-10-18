import React from "react";
import Card from "../components/Card";
import cards from "../db";
import "../blocks/projects.css";
import Footer from "../components/Footer";

export default function Projects(props: { setMenu: any }) {
    const handleBack = () => {
        props.setMenu("menu");
    };
    return (
        <section>
            <p className='back' onClick={handleBack}>
                Back
            </p>
            <div className='projects'>
                {cards.map((card, index) => {
                    return (
                        <Card
                            mainImage={card.mainImage}
                            about={card.about}
                            stack={card.stack}
                            link={card.link}
                        />
                    );
                })}
            </div>
            <Footer />
        </section>
    );
}
