import './App.css';
function welcomePrint(props) {
    const changeName = ["Past", "Present", "Future"];
    let output = Math.floor(Math.random() * 3);
    const { SendName, SendColor } = props;
    console.log('Props:',props);

    const text = `Hi I am ${SendName} Car in ${SendColor} color`

    return(
        <>
        <h1>Welcome to the <span id='output'>{changeName[output]}</span> From Ours! </h1> 
        <h3>{text}</h3>
        </>
    )
  
}

export default welcomePrint;



