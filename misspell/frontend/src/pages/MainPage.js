import React, { Component } from 'react';
import "./MainPage.css";

export default class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <div id="title">
                        i misepeled mispel
                </div>
                <div id="description">HackUCI project by Jimmy, Sunbun, Shubrangle<br></br>
                    Purpose (welcome): <br></br>How to start <br></br>Rules: 
                    <br></br>Have fun you inconceiveable noosance
                </div>
                <input class="interact" id="playername" type="text" placeholder="enter player name" name="name"></input>
                <button class="interact" id="waitroom">Create Room</button> 
                <button class="interact" id="joinroom">Join Room</button>
            </div>
        );
    }
}