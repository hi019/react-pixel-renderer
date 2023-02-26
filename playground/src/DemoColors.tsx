import { Text } from "pixel-renderer";
import { useEffect, useState } from "react";

const allColors = ["red", "yellow", "pink", "blue"];

function App() {
  const [color, setColor] = useState(allColors[0]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setColor(allColors[i % 4]);
      i++;
    }, 1000);
  }, []);

  return <Text color={color}>Hello!!!</Text>;
}

export default App;
