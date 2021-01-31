import React, { Component } from 'react';
import "./EnterRoom.css";

export default class EnterRoom extends Component {
    render() {
        return (
            <div className="EnterRoom">
                <div id="enter">Enter the Room Code:</div>
                <div id="code">code</div>
                <div id="join">Join Room</div>
            </div>
        );
    }
}

