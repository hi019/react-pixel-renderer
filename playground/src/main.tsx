import React from "react";
import { render } from "pixel-renderer";
import DemoTime from "./DemoTime";

async function main() {
  const driver = await (process.env.DRIVER === "pi"
    ? import("pixel-renderer/dist/drivers/pi")
    : import("pixel-renderer/dist/drivers/canvas"));

  render(<DemoTime />, driver.default);
}

main();
