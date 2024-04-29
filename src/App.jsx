// https://react-bootstrap.netlify.app/docs/components/cards
import { 
    BrowserRouter as Router, Routes, 
    Route 
} from "react-router-dom"; 
import Game from "./Game"
import Home from "./Home"
// import Stats from './Stats'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/game" element = {<Game/>}/>
          {/* <Route path="/stats" element = {<Stats/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
