import { useState } from "react"

function ComplexState() {
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>Complex State</h1>
            </div>
            {/* <ComplexArray /> */}
            <ComplexObjects />
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

function ComplexObjects() {
    const [contact, setContact] = useState({
        firstName: "Zach",
        lastName: "Von",
        phone: "+1 555-555-5555",
        email: "zach.von@mscoding,org",
        isFavorite: false,
        age: 32
    });

    function toggleFavorite() {
        // ... spread operator does the same as array
        // 
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return(
        <div className="row">
            <div className="col-12">
                <h2>Complex Objects</h2>
                <div className="row">
                    <div className="col-4">
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <ComplexObjectFav fav= {contact.isFavorite} handleClick={toggleFavorite}/>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ComplexObjectFav(fav, handleClick) {

    let favorite = fav ? 'favoriteTrue' : 'favoriteFalse'

    return(
        <div className="">
            <div onClick={handleClick} className= {`text-center ${favorite}`}>
                X
            </div>
        </div>
    )
}
export default ComplexState