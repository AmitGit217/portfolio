import React from "react";
import "../blocks/game.css";
import GameCards from "./GameCards";

export default function Game() {
    return (
        <div className='game'>
            <div className='game__main'>
                <GameCards />
            </div>
        </div>
    );
}
