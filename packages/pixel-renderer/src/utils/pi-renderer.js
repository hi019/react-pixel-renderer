import { Font, GpioMapping, LedMatrix } from "rpi-led-matrix";

let matrix;

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

export const drawText = (text, row, col, color) => {
    console.log("drawText", text, row, col);

    const fontName = "6x10";
    const font = new Font(fontName, `${process.cwd()}/${fontName}.bdf`);

    console.log("color1", color);

    matrix
        .clear()
        .font(font)
        .brightness(50)
        .fgColor(color)
        .drawText(text, col, row)
        .sync();
};

export const drawPixel = (x, y) => {
    matrix.fgColor(0xffffff).setPixel(x, y).sync();
};
