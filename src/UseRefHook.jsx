import React, { useRef } from 'react'

const UseRefHook = () => {

    const inputRef = useRef(null);

    const clickfunction = () => {
        inputRef.current.value = "";
    }

    return (
        <div>

            <h2>UseRefHook</h2>
            <h3>
                <input type='text' placeholder='Type here..' ref={inputRef} />
                <button onClick={clickfunction}> Clear input field</button>

            </h3>
            <h3>.......................................</h3>
        </div>
    )
}

export default UseRefHook