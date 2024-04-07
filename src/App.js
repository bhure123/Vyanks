import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import Alert from './components/Alert';
///import RangeGraph from './components/About';



function App() {
  const [mode , setMode] = useState('light')
  const[alert,setAlert]=useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title ='TextUtils-DarkMode Enable ';
    }else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled","success");
      document.title ='TextUtils-LightMode Enable ';
    }
  }
 
  
return (<>
    <Navbar title ="TextUtils" aboutText ="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
  <TextForm showAlert={showAlert} heading ="Enter to text analyze" mode ={mode}/>

    <About/>
   
    </div>
   
    </>
  );
}

export default App;
