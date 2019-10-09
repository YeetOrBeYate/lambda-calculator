import React, {useState} from "react";
import "./App.css";
import {Numbers} from "./components/ButtonComponents/NumberButtons/Numbers";
import {Operators} from "./components/ButtonComponents/OperatorButtons/Operators";
import {Specials} from "./components/ButtonComponents/SpecialButtons/Specials";
import {Display} from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
 
  const [display, setDisplay] = useState(0);



  function showValue(value){

    if(display === 0){
      setDisplay(value)
    }else{
      setDisplay(display + value);
    }
    
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}



        <Display display={display}/>




        <div className = "yeet">
          <div className = "primary">
            <Specials/>


            <Numbers function={showValue}/>


            
          </div>
          <div className = "second">
            <div className = "secondary">
              <Operators/>
            </div>
          </div>
        </div>
       
        
        
        
        
      </div>
    </div>
  );
}

export default App;
