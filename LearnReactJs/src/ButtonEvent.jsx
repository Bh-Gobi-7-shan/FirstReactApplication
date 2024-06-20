import './App.css';
function ButtonEvent() {
    
    const ButtonClick = () =>{
        console.log("Button Clicked")
        
    }
    

    return(
        <button onClick={ButtonClick}>Click to contiue </button> 
        
    )
  
}

export default ButtonEvent;