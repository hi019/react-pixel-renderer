import {
    Font,
    GpioMapping,
    LedMatrix,
    LedMatrixInstance,
    RuntimeFlag,
} from "rpi-led-matrix";
import Color from "color";

let matrix: LedMatrixInstance;

export const init = () => {
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
};

export const clear = () => {
    matrix.clear();
};

export const drawText = (text: string, x: number, y: number, color: string) => {
    console.log("drawText", text, x, y);

    // TODO make font configurable
    const fontName = "6x10";
    const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);
    const colorVal = Color(color);

    matrix
        .font(font)
        .brightness(100)
        .fgColor({ r: colorVal.red(), g: colorVal.green(), b: colorVal.blue() })
        .drawText(text, x, y)
        .sync();
};

export const drawPixel = (x: number, y: number, color: string) => {
    const colorVal = Color(color);
    matrix
        .fgColor({ r: colorVal.red(), g: colorVal.green(), b: colorVal.blue() })
        .setPixel(x, y)
        .sync();
};

export const stringDimensions = (text: string) => {
    // TODO make font configurable
    const fontName = "6x10";
    const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);

    return { width: font.stringWidth(text), height: font.height() };
};

export const width = 64;
export const height = 32;
