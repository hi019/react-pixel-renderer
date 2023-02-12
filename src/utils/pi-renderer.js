import { Font, GpioMapping, LedMatrix } from "rpi-led-matrix";

let matrix;

export const init = () => {
    console.log("in init");

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

export const drawText = (text, row, col) => {
    console.log("drawText", text, row, col);

    const x = col * 24;
    const y = (row + 1) * 24;

    const fontName = "helvR12";
    const font = new Font(fontName, `${process.cwd()}/build/${fontName}.bdf`);

    matrix
        .clear()
        .font(font)
        .brightness(100)
        .fgColor(0xffffff)
        .drawText("text", 1, 1)
        .sync();
};

export const drawPixel = (x, y) => {
    matrix.fgColor(0xffffff).setPixel(x, y).sync();
};
