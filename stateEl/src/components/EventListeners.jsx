function EventListeners () {
    
    // These type of functions will be made above the return state and inside the functional component
    function handleClick() {
        console.log('I am Clicked')
    }

    function imgHover() {
        console.log('You have hovered over the image')
    }
    
    return (
        <div className="row">
            <div className="col-12">
                <h1>Event Listeners</h1>
            </div>
            <div className="col-12">
                {/* Don't attach "()" after a function or it it will autorun */}
                {/* EventListeners are always going to be attached to HTML (CamelCased) */}
                <img src="https://picsum.photos/640/360" alt="" onMouseEnter={imgHover} />
            </div>
            <div className="col-12">
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
        
    )
}

export default EventListeners