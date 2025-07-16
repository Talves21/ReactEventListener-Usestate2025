import {useState} from 'react'

function CounterPractice() {
    const [count, setCount] = useState(0)

    function add() {
        // First way to pass new values to useState
        // setCount(
        //     function(prevCount) {
        //         return prevCount + 1
        //     }
        // )

        // 2nd Way
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>Counter Practice</h1>
            </div>
            <div className="col-12">
                <input onClick={add} type="button" value="Add" />
                <p>{count}</p>
            </div>
        </div>
    )
}

export default CounterPractice