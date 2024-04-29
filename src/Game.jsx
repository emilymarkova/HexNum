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
import wand1 from "./images/wand1.png";
import wand2 from "./images/wand2.png";
import wand3 from "./images/wand3.png";
import wand4 from "./images/wand4.png";
import wand5 from "./images/wand5.png";
import bigpotion from "./images/bigpotion.png";
import smallpotion from "./images/smallpotion.png";
import TotalHealth from "./TotalHealth"

export default function Game() {
  const [totalProblems, setTotalProblems] = useState(0);
  const [correctProblems, setCorrectProblems] = useState(0);
  const [health, setHealth] = useState(5);
  const [difficulty, setDifficulty] = useState(0);
  const [wizard, setWizard] = useState(neutral);
  const [totalScore, setTotalScore] = useState(1);
  const [gem, setGem] = useState(3);
  let heart1;

  
  let currQuestion = new Question();
  currQuestion.createQuestion(difficulty);
  console.log("Question: " + currQuestion.question + " Answer: " + currQuestion.answer);


  const updateProblem = () => {
    let answer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    
    if(answer == currQuestion.answer){
      if(correctProblems == 14) {
        setDifficulty(1);
      } else if (correctProblems == 29) {
        setDifficulty(2);
      }
      if(correctProblems % 3 == 0){
        //every 3rd correct answer, give them a gem
        setGem(gem+1);
      }
      setCorrectProblems(correctProblems + 1);
      setTotalProblems(totalProblems + 1);
      setWizard(happy);
    } else {
      //the answer's wrong
      setHealth(health-1);
      setWizard(sad);
    }

    setTotalProblems(totalProblems + 1);
    currQuestion = new Question();
    currQuestion.createQuestion(difficulty);
  };
  
  return (
    <div style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', width: '100vw', height: '100vh',backgroundPosition: 'center'}}>
      <div style={{margin: "20px", color:"white"}}>
        <p className="gems">
          <img src='src/images/gem.png' width="30px"></img>
         X{gem}
        </p>
  
        <p>
          Correct problems: {correctProblems}
        </p>
        <p>
        Total problems: {totalProblems}
        </p>
      

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> Question</Card.Title>
          <Card.Text>
            {currQuestion.question}
          </Card.Text>
        </Card.Body>
      </Card>
      <Image width="200px" src={wizard} rounded />
      <input type="text" id = "answer" placeholder="Enter answer..."/>
        

      <button onClick={() => updateProblem()}>
        Enter
      </button>
        </div>
      <TotalHealth health={health}/>
      <div style={{ width: "100vw", backgroundColor: "rgb(50, 52, 94)" }}>
        <Container>
          <Row
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-between",
            }}
          >
            <Col>
              <Image src={wand1} />
              <button style={{ padding: "5px" }}>3 Gems</button>
            </Col>
            <Col>
              <Image src={wand2} />
            </Col>
            <Col>
              <Image src={wand3} />
            </Col>
            <Col>
              <Image src={wand4} />
            </Col>
            <Col>
              <Image src={wand5} />
            </Col>
            <Col>
              <Image src={smallpotion} />
            </Col>
            <Col>
              <Image src={bigpotion} />
            </Col>
          </Row>
          {/* <Row
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Col>
              <button style={{ padding: "5px" }}>3 Gems</button>
            </Col>
            <Col>
              <button style={{ padding: "5px" }}>5 Gems</button>
            </Col>
            <Col>
              <button style={{ padding: "5px" }}>2 Gems</button>
            </Col>
            <Col>
              <button style={{ padding: "5px" }}>2 Gems</button>
            </Col>
            <Col>
              <button style={{ padding: "5px" }}>3 Gems</button>
            </Col>
            <Col>
              <button style={{ padding: "5px" }}>5 Gems</button>
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
  )
}
