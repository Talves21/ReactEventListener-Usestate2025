import {useState} from 'react'

function StateTernary() {
    const [isGoingOut, setIsGoingOut] = useState(false)

    function changeMind() {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    return(
        <div className="row">
            <div className="col-12">
                <h1>State Ternary</h1>
            </div>
            <div className="col-6">
                <h3 onClick={changeMind}>Am I going out?</h3>
            </div>
            <div className="col-6">
                <h5>{isGoingOut ? 'Yes' : 'No'}</h5>
            </div>
            {/* This is conditional rendering */}
            {isGoingOut ? <h3>Let's Go Out!</h3> : <h3>I wanna stay in...</h3>}
        </div>
    )
}

export default StateTernary