import React, { useState } from "react";
import SideBar from "./SideBar";
import { CodeBlock, dracula } from "react-code-blocks";
import "../blocks/about-comp.css";
import profile from "../assets/images/profile.png";
import Footer from "./Footer";

export default function AboutComp() {
    const [showData, setData] = useState("personal-info");
    const handleDataDisplay = (str: string) => {
        setData(str);
    };
    const twoSum = `function TwoSum(arr) { 
 const map = new Map()
 const target = arr.shift()
 const result = []
 arr.forEach((number,index) => map.set(number,index))
 arr.forEach((number,index) => {
   const gap = target - number
   if(map.has(gap) && map.get(gap) != index){
     result.push([number,gap])
     map.delete(number)
     
   }
 })
 return result.length ? result.join(' ') : -1
}`;
    return (
        <section>
            <div className='about-comp'>
                <SideBar
                    nav={["personal-info", "professional-info"]}
                    compToShow={handleDataDisplay}
                    isActive={showData}
                />
                {showData === "personal-info" ? (
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
                        <img
                            className='about-comp__image'
                            src={profile}
                            alt='profile'
                        />
                    </div>
                ) : (
                    <div className='about-comp__code'>
                        <CodeBlock
                            text={`/*

I'm a full stack web developer with
experience of developing, maintaining,
testing and deploying E2E web
applications. Some of my methodologies:   

>>> REST API for the server side and
    Single-Page-Application for the
    front-end implementation.

>>> OOP & COP patterns: reusability,
    single task functions, generic
    functions & classes.

>>> Great balance between Imperative
    and declarative programming
    approaches.

>>> Test-Driven-Development using
    modern testing frameworks.

>>> Attention to performance,
    efficiency, and edge cases.

*/`}
                            language={"js"}
                            showLineNumbers={true}
                            theme={dracula}
                        />
                        <div className='about-comp__code-snippet'>
                            <CodeBlock
                                text={twoSum}
                                language={"js"}
                                showLineNumbers={false}
                                theme={dracula}
                            />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </section>
    );
}
