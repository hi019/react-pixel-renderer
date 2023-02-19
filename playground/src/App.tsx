import { Text } from "pixel-renderer";
import { useEffect, useState } from "react";

const allColors = [0xff0000, 0x00ff00, 0x0000ff];

function App() {
  const [color, setColor] = useState(allColors[0]);

  useEffect(() => {
    const colors = [0xff0000, 0x00ff00, 0x0000ff];
    let i = 0;

    const interval = setInterval(() => {
      i++;

      setColor(colors[i % 3]);
    }, 1000);
    return () => clearInterval(interval);
  }, [setColor]);

  // @ts-ignore
  return <Text color={color}>Wow</Text>;
}

export default App;
