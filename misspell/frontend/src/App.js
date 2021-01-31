import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div id="title">
                    i mispeled mispel
            </div>
            <div id="description">HackUCI project by Jimmy, Sunbun, Shubrangle<br></br>
                Welcome to a fun quarantine spelling bee with your friends!<br></br>How to start: Click the play button to hear the word.<br></br>Rules: Do not search up the word spelling!
                <br></br>Have fun you inconceiveable noosance
            </div>
            <input class="interact" id="playername" type="text" placeholder="enter player name" name="name"></input>
            <Link to="/room" class="interact" id="waitroom">Create Room</Link> 
            <Link to="/join" class="interact" id="joinroom">Join Room</Link>
        </div>
    );
}

export default App;