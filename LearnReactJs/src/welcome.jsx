import './App.css';


const carInfo = [
    {Name:"Benz", color: "Red"},
    {Name: "Toyota", color : "White"},
    {Nme: "Rolce royce", color: "Black"}
]

const Array = [1,2,3,4,5,6,7]

// for the array object only
function ArrayPrint(obj){
    return(
        <li key = {obj.Name} > {`Hi! I am ${obj.Name} I am in ${obj.color}`}</li>
         // Key must be uniquely indentify
    )
}
//End for the array



function welcomePrint(props) {
    const changeName = ["Past", "Present", "Future"];
    let output = Math.floor(Math.random() * 3);


    
    const { SendName, SendColor } = props;
    console.log('Props:',props.SendName);

    const text = `Hi I am ${SendName} Car in ${SendColor} color`

    return(
        <>
        <h1>Welcome to the <span id='output'>{changeName[output]}</span> From Ours! </h1>{
            props.SendName !== undefined && props.SendColor !== undefined ? 
            <h3>{text}</h3>:
            null
        }
        
        <ul>{carInfo.map(ArrayPrint)}</ul>

        <br/>
        <ul>{Array.map((value, index) => (<li key={index}>{`${index}th index has ${value} value`}</li>))}</ul>
        
        </>
    )
  
}

export default welcomePrint;



