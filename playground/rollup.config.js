import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

const env = process.env.HOST_ENV;

export default {
  input: "src/main.tsx",
  output: {
    file: "dist/index.cjs",
    format: "cjs",
  },
  external: ["rpi-led-matrix"],
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    replace({
      "process.env.HOST_ENV": env,
    }),
  ],
};
