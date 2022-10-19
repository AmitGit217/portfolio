import React, { useState } from "react";
import SideBar from "./SideBar";
import { CodeBlock, dracula } from "react-code-blocks";
import "../blocks/about-comp.css";

export default function AboutComp() {
    const [showData, setData] = useState("personal-info");
    const handleDataDisplay = (str: string) => {
        setData(str);
    };
    return (
        <section className='about-comp'>
            <SideBar
                nav={["personal-info", "professional-info"]}
                compToShow={handleDataDisplay}
                isActive={showData}
            />
            {showData === "personal-info" && (
                <div className='about-comp__code'>
                    <CodeBlock
                        text={`/*
* Hello there. My name is Amit Bar-Gil and
* I'm 22 years old and currently live in
* Afula (North Israel). I love to learn
* new things, challenge myself and
* collaborate with others on projects and
* interesting ideas. Some of my hobbies:
* music, sport, and chess.
*/`}
                        language={"js"}
                        showLineNumbers={true}
                        theme={dracula}
                    />
                </div>
            )}
        </section>
    );
}
