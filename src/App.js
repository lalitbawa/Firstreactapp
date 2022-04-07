import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const[aboutColor,aboutTextColor] = useState({color:"black"})
  const showAlert = (message,type)=>{
   setAlert({
     msg : message,
     type : type
   })
   setTimeout(() => {
     setAlert(null)
   }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled" , "success")
      aboutTextColor({color:"white"})
      
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("light mode has been enabled" , "success")
      aboutTextColor({color:"black"})
    }
  }
  return (
    <Router>
    <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    
    <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
    <Route exact path="/about" element={<About aboutColor ={aboutColor}/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
