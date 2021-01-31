import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: this.defaultName,
        };
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
    }

    handleUserName(e) {
        this.setState({
            userName: e.target.value,
        });
    }

    handleCreateRoom() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                host_name: this.state.userName,
            }),
        };
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    render() {
        return (
            <div className="App">
                <div id="title">
                        i mispeled mispel
                </div>
                <div id="description">HackUCI project by Jimmy, Sunbun, Shubrangle<br></br>
                    Welcome to a fun quarantine spelling bee with your friends!<br></br><strong>How to start:</strong> Click the play button to hear the word.<br></br><strong>Rules:</strong> Do not search up the word spelling!
                    <br></br>Have fun you inconceiveable noosance
                </div>
                <input class="interact" id="playername" required={true} type="text" placeholder="Enter Player Name" onChange={this.handleUserName} defaultValue={this.defaultName}/>
                <button class="interact" id="waitroom" onClick={this.handleCreateRoom}><Link to="/room">Create Room</Link></button>
                <button class="interact" id="joinroom"><Link to="/join">Join Room</Link></button>
            </div>
        );
    }
}
