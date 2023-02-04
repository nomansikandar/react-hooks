import React, { useRef } from 'react'
import Button from './Button';

const ImperativeHandleHook = () => {

    const buttonRef = useRef(null);

    return (
        <div>
            <h2>ImperativeHandleHook</h2>
            <h3><button
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >Button from Parent</button></h3>
            <Button ref={buttonRef} />
            <h3>.......................................</h3>
        </div>
    )
}

export default ImperativeHandleHook