import {
    Font,
    GpioMapping,
    LedMatrix,
    LedMatrixInstance,
    RuntimeFlag,
} from "rpi-led-matrix";
import Color from "color";
import { Driver } from "../components/PixelDisplay";

let matrix: LedMatrixInstance;

const driver: Driver = {
    width: 64,
    height: 32,

    stringDimensions(text: string): { width: number; height: number } {
        // TODO make font configurable
        const fontName = "6x10";
        const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);

        return { width: font.stringWidth(text), height: font.height() };
    },

    drawPixel(x: number, y: number, color: string) {
        const colorVal = Color(color);
        matrix
            .fgColor({
                r: colorVal.red(),
                g: colorVal.green(),
                b: colorVal.blue(),
            })
            .setPixel(x, y)
            .sync();
    },

    drawText(text: string, x: number, y: number, color: string) {
        console.log("drawText", text, x, y);

        // TODO make font configurable
        const fontName = "6x10";
        const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);
        const colorVal = Color(color);

        matrix
            .font(font)
            .brightness(100)
            .fgColor({
                r: colorVal.red(),
                g: colorVal.green(),
                b: colorVal.blue(),
            })
            .drawText(text, x, y)
            .sync();
    },
    init() {
        matrix = new LedMatrix(
            {
                ...LedMatrix.defaultMatrixOptions(),
                rows: 32,
                cols: 64,
                hardwareMapping: GpioMapping.AdafruitHat,
            },
            {
                ...LedMatrix.defaultRuntimeOptions(),
                dropPrivileges: RuntimeFlag.Off,
            }
        );
    },
    clear() {
        matrix.clear();
    },
};

export default driver;
