import React from 'react';
import { Link } from "react-router-dom";
import "./WaitingRoom.css";

function WaitingRoom() {
    return (
        <div className="WaitingRoom">
            <div id="code">Room Code:</div>
            <div id="codebox">enter code</div>
            <Link to="/game" id="start">Start Game</Link>
            <div class="playername" id="p1">player 1</div>
            <div class="playername" id="p2">player 2</div>
            <div class="playername" id="p3">player 3</div>
            <div class="playername" id="p4">player 4</div>
            <div class="playername" id="p5">player 5</div>
            <div class="playername" id="p6">player 6</div>
            <div class="playername" id="p7">player 7</div>
            <div class="playername" id="p8">player 8</div>
            <Link to="/" id="menu">Main Menu</Link>
        </div>
    )
}

export default WaitingRoom;
