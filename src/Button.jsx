import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {

    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <h3><button>Button from Child</button></h3>
            <h3>{toggle && <span>Toggle</span>}</h3>
        </div>
    )
})

export default Button