import React from "react";
import Card from "../components/Card";
import cards from "../db";
import "../blocks/projects.css";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

export default function Projects(props: { setMenu: any }) {
    const handleBack = () => {
        props.setMenu("menu");
    };
    return (
        <div>
            <section className='projects-container'>
                <p className='back' onClick={handleBack}>
                    Back
                </p>
                <SideBar
                    nav={["projects"]}
                    compToShow={"projects"}
                    isActive={"projects"}
                />
                <div className='projects'>
                    {cards.map((card, index) => {
                        return (
                            <Card
                                mainImage={card.mainImage}
                                about={card.about}
                                stack={card.stack}
                                link={card.link}
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>
            <Footer />
        </div>
    );
}
