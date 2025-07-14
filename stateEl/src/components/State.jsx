import { useState } from "react"

function State() {

    // 1st way to Call State
    // const result = useState('No')
    // console.log(result[0]); //Gives the data being saved
    // console.log(result[1]); //Gives function to update the data being saved

    // Actual way to call State
    //UseState variable is way to track data, but if "React" sees this variable get updated , it will re-render this function component
    const [result, setResult] = useState('No')
    //Left side shows data being stored
    //Right side is a function to change/manipulate data
    console.log(result);
    console.log(setResult);

    function changeAnswer() {
        setResult('Yes');
    }

    return(
        <div className="row">
            <div className="col-12">
                <h1>State</h1>
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-12">
                <h4>{result}</h4>
            </div>
        </div>
    )
}

export default State