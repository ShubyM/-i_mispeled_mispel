import React from 'react';
import "./GameRoom.css";

function GameRoom() {
    return (
        <div className="GameRoom">
            <div id="spell">Spell the Word:</div>
            <button id="playback"><span class="iconify" data-icon="openmoji:play-button" data-inline="false" height="105px" width="105px"></span></button>
            <div class="example" id="exsent">Example:</div>
            <div class="example" id="random">random sentence example fit</div>
            <div id="enterword">Enter your word below</div>
            <div id="empty"></div>
            <div class="player" id="p1">player 1</div>
            <div class="player" id="p2">player 2</div>
            <div class="player" id="p3">player 3</div>
            <div class="player" id="p4">player 4</div>
            <div class="player" id="p5">player 5</div>
            <div class="player" id="p6">player 6</div>
            <div class="player" id="p7">player 7</div>
            <div class="player" id="p8">player 8</div>
            <div class="score" id="s1">scr1</div>
            <div class="score" id="s2">scr2</div>
            <div class="score" id="s3">scr3</div>
            <div class="score" id="s4">scr4</div>
            <div class="score" id="s5">scr5</div>
            <div class="score" id="s6">scr6</div>
            <div class="score" id="s7">scr7</div>
            <div class="score" id="s8">scr8</div>
        </div>
    );
}

export default GameRoom;