import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import injectProcessEnv from "rollup-plugin-inject-process-env";

export default {
  input: "src/main.tsx",
  output: {
    file: "dist/index.cjs",
    format: "cjs",
    inlineDynamicImports: true,
  },
  external: ["rpi-led-matrix"],
  plugins: [
    commonjs(),
    typescript(),
    nodeResolve(),
    injectProcessEnv({
      DRIVER: "pi",
    }),
  ],
};
