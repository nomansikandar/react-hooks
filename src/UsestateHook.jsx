import React, { useState } from 'react'

const UsestateHook = () => {

    const [counter, setCounter] = useState(0);
    const [inputVal, setInputVal] = useState("Nom");

    const increment = () => {
        setCounter(counter + 1)
    }

    const updateValue = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <div>

            <h2>UsestateHook</h2>
            <h3>{counter} <button onClick={increment}>Increment</button></h3>
            <input type="text" placeholder='write something..' onChange={updateValue} />
            {inputVal}
            <h3>.......................................</h3>

        </div>
    )
}

export default UsestateHook