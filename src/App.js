// import logo from './logo.svg';
import './App.css';
import Home from './stepform/Home';
// import Exampl from './components/Exampl';
// import Formtask from './components/Formtask';
import Stepone from './stepform/Stepone';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/form" element={<Stepone/>}/>
      </Routes>
    </Router>
      <div>
      {/* <Stepone/> */}
      </div>
   
    
    </div>

  );
}

export default App;
