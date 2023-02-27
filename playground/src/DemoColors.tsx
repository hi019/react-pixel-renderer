import { Text, Flex } from "pixel-renderer";
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

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text color={color}>A</Text>
      <Text color={color}>B</Text>
    </Flex>
  );
}

export default App;
