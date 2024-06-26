import './App.css';
function ButtonEvent() {
    
    function ButtonClick(){
        console.log("Button Clicked")
        
    }
    

    return(
        <button onClick={ButtonClick}>Click to contiue </button> 
        
    )
  
}

export default ButtonEvent;