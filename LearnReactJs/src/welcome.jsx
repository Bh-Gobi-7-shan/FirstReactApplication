import './App.css';
function welcomePrint() {
    const changeName = ["Past", "Present", "Future"];
    let output = Math.floor(Math.random() * 3);

    return(
        <h1>Welcome to the <span id='output'>{changeName[output]}</span> From Ours! </h1> 
        
    )
  
}

export default welcomePrint;
