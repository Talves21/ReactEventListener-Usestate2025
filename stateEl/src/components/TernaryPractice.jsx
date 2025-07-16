import {useState} from 'react'

function TernaryPractice() {
    const murderIf = true
    const murderName = 'Jim Crawford'

    let answer = murderIf ? 'Yes' : 'No'
    let styleCondition = murderIf ? 'col-12' : 'col-1'

    return(
        <div className="row">
            <div className="col-12">
                <h1>Ternary Practice</h1>
            </div>
            <div className={`${styleCondition}`}>
                <h2>Was there a murder in Savannah?</h2>
                <h4>{answer}</h4>
            </div>
        </div>
    ) 
}

export default TernaryPractice