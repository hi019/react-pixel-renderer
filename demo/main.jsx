import React, { useEffect } from "react";
import { render, Text } from "../src/index.js";

function App() {
    const [text, setText] = React.useState("Hello World");

    useEffect(() => {
        let interval = setInterval(() => {
            setText((v) => v + "!");
        }, 1000);
        return () => clearTimeout(interval);
    }, [setText]);

    return <Text>{text}</Text>;
}

render(<App />);
