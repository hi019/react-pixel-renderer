import React from "react";
import { render } from "pixel-renderer";
import DemoTime from "./DemoTime";

async function main() {
  const driver = await (process.env.DRIVER === "pi"
    ? import("pixel-renderer/dist/utils/pi-driver")
    : import("pixel-renderer/dist/utils/canvas-driver"));

  render(<DemoTime />, driver.default);
}

main();
