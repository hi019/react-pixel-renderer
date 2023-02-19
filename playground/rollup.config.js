import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.tsx",
  output: {
    file: "dist/index.cjs",
    format: "cjs",
  },
  external: ["rpi-led-matrix"],
  plugins: [commonjs(), typescript(), nodeResolve()],
};
