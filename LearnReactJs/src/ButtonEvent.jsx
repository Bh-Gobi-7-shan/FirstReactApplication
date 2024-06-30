import styleSheet from './buttonclick.header.css';
import { useState } from 'react';  // for state

const myColor = {
    color: "red"
}
const changeColor = {
    color: "blue"
}

function ButtonEvent() {
    const [color, setColor] = useState(myColor)
    
    function ButtonClick(){
        setColor(changeColor);    
    }

   
   
    

    return(
        <>
        <button onClick={ButtonClick} className={styleSheet.button}>Click to contiue </button>
        <h1 style={color}>If you Click me then my color change</h1> 
        // this is style sheet for specific componant 
        </>
        
    )
  
}

export default ButtonEvent;