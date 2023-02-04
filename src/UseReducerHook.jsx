import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }

        case "toggleShowText":
            return { count: state.count, showText: !state.showText }

        default:
            return state
    }
}


const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <div>
            <h2>UseReducerHook</h2>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" })
                dispatch({ type: "toggleShowText" })
            }} >INCREMENT</button>
            {state.showText && <p>This is a text</p>}
            <h3>.......................................</h3>

        </div>
    )
}

export default UseReducerHook