import React from "react";

const myStyle = {
    color : "red",
    backgroundColor : "lightblue",
    padding : "12px"
}

class Hi extends React.Component{
    render(){
        return(
            <>
            <h2 style={myStyle}> Hey Click the button</h2>
            </>
        )
    }


}



export default Hi;
