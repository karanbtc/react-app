import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React, { useState } from 'react';
import logo1 from "./images/first_react.jpeg";
import logo2 from "./images/second_react.jpeg";
import logo3 from "./images/third_react.jpeg";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type, text) => {
    setAlert({
      text: text,
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Theme has been Enabled','success')
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Theme has been Enabled','success')
    }
  }

  return (
    <Router>
      <Navbar title="TestApp" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About logo={{logo1: logo1, logo2: logo2, logo3: logo3}} />} />
          <Route path="/" element={<Textarea modeColor={mode === 'light' ? 'black' : 'white'} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
