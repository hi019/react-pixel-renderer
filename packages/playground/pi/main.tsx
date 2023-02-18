import React from "react";
import { render } from "pixel-renderer";
import { Text } from "pixel-renderer";
import { PiHost } from "pixel-renderer/src/utils";

function App() {
  return <Text>Test</Text>;
}

render(<App />, PiHost);
