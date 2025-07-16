import { useState } from "react"

function ComplexState() {
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>Complex State</h1>
            </div>
            <ComplexArray />
        </div>
    )
}

function ComplexArray() {
    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2'])

    const thingsElement = thingsArray.map (
        (thing) => <p>{thing}</p>
    )

    function addItem() {
        const newThingsText = <p>Thing {thingsArray.length + 1}</p>

        // Never directly modify our useState value
        // Never do this to a 'useState' array
        // thingsArray.push(newThingsText)
        // Instead use setName variable

        // When setting a new state value
        // If we depend on the old version of our State(value/array) we think about a callback function
        // ...spread operator, gets entire current array


        // New Push Method
        setThingsArray(prevThingsArray => [...prevThingsArray, newThingsText])
    }

    return(
        <div className="col-12">
            <h2>Complex Arrays</h2>
            <button onClick={addItem}>Add Items</button>
            {thingsElement}
        </div>
    )
}

export default ComplexState