import React, { useState, createContext } from 'react'
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);


const UseContextHook = () => {

    const [username, setUsername] = useState("");

    return (

        <div>
            <h2>UseContextHook</h2>
            <AppContext.Provider value={{ username, setUsername }} >
                <Login /> <User />
            </AppContext.Provider>
            <h3>.......................................</h3>
        </div>
    )
}

export default UseContextHook