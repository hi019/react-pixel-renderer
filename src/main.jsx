import React, { useEffect } from "react";
import render from "./render";

const TextEl = "TEXT";

function App() {
    const [text, setText] = React.useState("Hello World");

    useEffect(() => {
        console.log("Effect: In effect");

        let interval = setInterval(() => {
            setText((v) => v + "!");
        }, 1000);
        return () => clearTimeout(interval);
    }, [setText]);

    return <TextEl>{text}</TextEl>;
}

render(<App />);
