//https://react-bootstrap.netlify.app/docs/components/table
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
import Question from './Question';
import './Game.css';
import { useState } from 'react';
import background from "./images/playpage.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import neutral from "./images/neutral.png"
import happy from "./images/happy.png"
import sad from "./images/sad.png"
import Image from "react-bootstrap/Image"
import heart from './images/health.png'
import blackHeart from './images/lostheart.png'
import wand1 from "./images/wand1.png";
import wand2 from "./images/wand2.png";
import wand3 from "./images/wand3.png";
import wand4 from "./images/wand4.png";
import wand5 from "./images/wand5.png";
import bigpotion from "./images/bigpotion.png";
import smallpotion from "./images/smallpotion.png";
import TotalHealth from "./TotalHealth"
import Table from 'react-bootstrap/Table';


export default function Game() {
  const [totalProblems, setTotalProblems] = useState(0);
  const [correctProblems, setCorrectProblems] = useState(0);
  const [health, setHealth] = useState(5);
  const [difficulty, setDifficulty] = useState(0);
  const [wizard, setWizard] = useState(neutral);
  const [wand, setWand] = useState(wand1);
  const [totalScore, setTotalScore] = useState(1);
  const [gem, setGem] = useState(3);
  const [disabled, setDisabled] = useState(false);
  let heart1;
  console.log("health : " + health);
  console.log("gem : " + gem);
  if (health==0) {
    heart1 = <div>
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
    </div>
  } else if (health==1) {
    heart1 = <div>
      <Image width="40px" src={heart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
    </div>
  } else if (health==2) {
    heart1 = <div>
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
      
    </div>
  } else if (health==3) {
    heart1 = <div>
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={blackHeart} />
      <Image width="40px" src={blackHeart} />
    </div>
  } else if (health==4) {
    heart1 = <div>
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={blackHeart} />
    </div>
  } else if (health==5) {
    heart1 = <div>
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
      <Image width="40px" src={heart} />
    </div>
  }

  
  let currQuestion = new Question();
  currQuestion.createQuestion(difficulty);
  console.log("Question: " + currQuestion.question + " Answer: " + currQuestion.answer);


  const buy = () => {
    cost = 5;
    item = "wand1";
    if(cost > gem){
      //they don't have enough gems to buy it
      return;
    }
    console.log("buying")
    if(item == "wand1"){
      setWand(wand1);
    } else if(item == "wand2"){
      setWand(wand2);
    } else if(item == "wand3"){
      setWand(wand3);
    } else if(item == "wand4"){
      setWand(wand4);
    } else if(item == "wand5"){
      setWand(wand5);
    } else if(item == "smallpotion"){
      setHealth(health+1);
      setDisabled(false);
    } else if(item == "bigpotion"){
      setHealth(health+2);
      setDisabled(false);
    }
    setGem(gem-cost);
    console.log("subtracted  : " + cost);
  }
  const updateProblem = () => {
    console.log("updating")
    let answer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    
    if(answer == currQuestion.answer){
      if(correctProblems == 2) {
        setDifficulty(1);
      } else if (correctProblems == 9) {
        setDifficulty(2);
      }
      if(correctProblems % 2 == 0){
        //every 3rd correct answer, give them a gem
        setGem(gem+1);
      }
      setCorrectProblems(correctProblems + 1);
      setTotalProblems(totalProblems + 1);
      setWizard(happy);
    } else {
      //the answer's wrong
      if (health == 1) setDisabled(true);

      if(health >0){
        //if they're not already out of lives
        setHealth(health-1);
      }
      
      setWizard(sad);
    }

    setTotalProblems(totalProblems + 1);
    currQuestion = new Question();
    currQuestion.createQuestion(difficulty);
  };
  
  return (
    <div style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', width: '100vw', height: '100vh',backgroundPosition: 'center'}}>
      <div id="main">
        <Table style={{width:"100vw",height:"100vh"}}>
          <tr style={{height: "20%"}}>
            <td colSpan={2}>
        <p id="gems">
          <img src='src/images/gem.png' width="60px"></img>
         {gem}
        </p>
              </td>
            <td colSpan={1}>
        <div id="stats" style={{width:"50%vw"}}>
          <div id ="hearts">
            {heart1}
          </div>
          <p>
            Correct problems: {correctProblems}
          </p>
          <p>
          Total problems: {totalProblems}
          </p>
          <p>
          Percentage : {totalProblems != 0 ? (correctProblems/totalProblems*100).toFixed(2) : 0.00}%
          </p>
        </div>
              </td>
            </tr>
          <tr style={{height: "60%"}}>
        <td colSpan={3}>
        <div id="board" style={{display:"inline-block"}}>
          <Card classNamestyle={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text>
                <h3>{currQuestion.question}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
          <input type="text" id = "answer" placeholder="Enter answer..." style={{height:"30px"}}/>
          <button disabled={disabled} onClick={() => updateProblem()} style={{display:"block", margin: "5px"}}>
            Enter
          </button>
        </div>

        <div id="teacher">
          <Image width="325px" src={wizard} rounded />
          <Image width="50px" src={wand} rounded />
        </div>
        </td>
          </tr>
          <tr style={{height: "20%"}}>
          <td colSpan={3}>
        <div id="table" style={{ width: "100vw", height: "100%", backgroundColor: "rgb(50, 52, 94)" }}>
          <Table style={{width: "100%"}}>
            <tbody>
              <tr>
                <td><Image src={wand1} /></td>
                <td><Image src={wand2} /></td>
                <td><Image src={wand3} /></td>
                <td><Image src={wand4} /></td>
                <td><Image src={wand5} /></td>
                <td><Image src={smallpotion} /></td>
                <td><Image src={bigpotion} /></td>
              </tr>
              <tr style={{color:"white"}}>
                <td>Wand 1</td>
                <td>Wand 2</td>
                <td>Wand 3</td>
                <td>Wand 4</td>
                <td>Wand 5</td>
                <td>+1 health</td>
                <td>+2 health</td>
              </tr>
              <tr>
                <td><button onClick={()=>{if(gem>=3){setGem(gem-3);setWand(wand1)}}} style={{ padding: "5px" }}>3 Gems</button></td>
                <td><button onClick={()=>{if(gem>=4){setGem(gem-4);setWand(wand2)}}} style={{ padding: "5px" }}>4 Gems</button></td>
                <td><button onClick={()=>{if(gem>=2){setGem(gem-2);setWand(wand3)}}} style={{ padding: "5px" }}>2 Gems</button></td>
                <td><button onClick={()=>{if(gem>=2){setGem(gem-2);setWand(wand4)}}} style={{ padding: "5px" }}>2 Gems</button></td>
                <td><button onClick={()=>{if(gem>=3){setGem(gem-3);setWand(wand5)}}} style={{ padding: "5px" }}>3 Gems</button></td>
                <td><button onClick={()=>{if(gem>=3 && health<=4){setGem(gem-3);setHealth(health+1);setDisabled(false)}}} style={{ padding: "5px" }}>3 Gems</button></td>
                <td><button onClick={()=>{if(gem>=5 && health<=3){setGem(gem-5);setHealth(health+2);setDisabled(false)}}} style={{ padding: "5px" }}>5 Gems</button></td>
              </tr>
            </tbody>
          </Table>
        
        </div>
            </td>
            </tr>
        </Table>
      </div>
      
    </div>
  )
}
