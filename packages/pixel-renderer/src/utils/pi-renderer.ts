import {
    Font,
    GpioMapping,
    LedMatrixInstance,
    LedMatrix,
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
        LedMatrix.defaultRuntimeOptions()
    );
};

export const clear = () => {
    matrix.clear();
};

export const drawText = (
    text: string,
    row: number,
    col: number,
    color: string
) => {
    console.log("drawText", text, row, col);

    const fontName = "6x10";
    const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);
    const colorVal = Color(color);

    matrix
        .clear()
        .font(font)
        .brightness(50)
        .fgColor({ r: colorVal.red(), g: colorVal.green(), b: colorVal.blue() })
        .drawText(text, col, row)
        .sync();
};

export const drawPixel = (x: number, y: number, color: string) => {
    const colorVal = Color(color);
    matrix
        .fgColor({ r: colorVal.red(), g: colorVal.green(), b: colorVal.blue() })
        .setPixel(x, y)
        .sync();
};
