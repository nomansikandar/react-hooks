
import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

    return (
        <div className="App">
            <h2>UseCallbackHook</h2>
            <Child returnComment={returnComment} />

            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
            <h3>.......................................</h3>
        </div>
    );
}