import React, { useState } from "react";
import GameCard from "./GameCard";
import "../blocks/game.css";
import react from "../assets/icons/react.svg";
import css from "../assets/icons/css.svg";
import mongo from "../assets/icons/mongodb.svg";
import node from "../assets/icons/node.svg";
import nest from "../assets/icons/nest.svg";
import postgres from "../assets/icons/postgres.svg";
import docker from "../assets/icons/docker.svg";
import typescript from "../assets/icons/typescript.svg";

export default function GameCards() {
    const [items, setItems] = useState(
        [
            { id: 1, img: react, stat: "" },
            { id: 1, img: react, stat: "" },
            { id: 2, img: css, stat: "" },
            { id: 2, img: css, stat: "" },
            { id: 3, img: mongo, stat: "" },
            { id: 3, img: mongo, stat: "" },
            { id: 4, img: node, stat: "" },
            { id: 4, img: node, stat: "" },
            { id: 5, img: docker, stat: "" },
            { id: 5, img: docker, stat: "" },
            { id: 6, img: typescript, stat: "" },
            { id: 6, img: typescript, stat: "" },
            { id: 7, img: nest, stat: "" },
            { id: 7, img: nest, stat: "" },
            { id: 8, img: postgres, stat: "" },
            { id: 8, img: postgres, stat: "" },
        ].sort(() => Math.random() - 0.5)
    );
    const [prev, setPrev] = useState(-1);

    function check(current: number) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    function handleClick(id: number) {
        console.log(id);
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);
        }
    }
    return (
        <div className='game__grid'>
            {items.map((item, index) => {
                return (
                    <GameCard
                        key={index}
                        id={index}
                        item={item}
                        handleClick={handleClick}
                    />
                );
            })}
        </div>
    );
}
