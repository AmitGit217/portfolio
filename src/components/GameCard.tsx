import React from "react";
import "../blocks/game.css";

export default function GameCard(props: {
    item: any;
    handleClick: any;
    id: number;
}) {
    const itemClass = props.item.stat ? " active " + props.item.stat : "";

    return (
        <div
            className={"game__card" + itemClass}
            onClick={() => props.handleClick(props.id)}>
            <img
                src={props.item.img}
                alt={props.item.id}
                className='game__card-image'
            />
        </div>
    );
}
