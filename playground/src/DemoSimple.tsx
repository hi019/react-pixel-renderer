import { Text, POSITION_TYPE_ABSOLUTE } from "pixel-renderer";
import { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((x) => (x + 1) % 64);
    }, 1000);
  }, [setX]);

  return (
    <Text positionType={POSITION_TYPE_ABSOLUTE} left={x} color={"blue"}>
      Test
    </Text>
  );
}

export default App;
