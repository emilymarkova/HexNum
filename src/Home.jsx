import './Home.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import background from './images/mainpage.png'

export default function Home() {
  return (
    <div class = "all">
      <div style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', width: '110vw', height: '110vh',backgroundPosition: 'center',margin: -20, alignContent:"center"}}>
        <img src="src/images/title.png" id="title"></img>
        <div class="buttons">
          <Link to="/game">
            <button style={{width: "30vw", height:"10vh"}}>
              Play!
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}
