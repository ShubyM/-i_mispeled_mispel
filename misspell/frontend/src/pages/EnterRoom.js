import React, { Component } from 'react';
import "./EnterRoom.css";

export default class EnterRoom extends Component {
    render() {
        return (
            <div className="EnterRoom">
                <div id="enter">Enter the Room Code:</div>
                <input id="code" type="text" placeholder="CODE"></input>
                <button id="join">Join Room</button>
            </div>
        );
    }
}






















