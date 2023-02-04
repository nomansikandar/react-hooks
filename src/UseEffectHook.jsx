import React, { useState, useEffect } from 'react'
import axios from 'axios'


const UseEffectHook = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            })
    }, [])


    return (
        <div>
            <h2>UseEffectHook</h2>
            <h3>{data}</h3>
            <h3>.......................................</h3>
        </div>
    )
}

export default UseEffectHook