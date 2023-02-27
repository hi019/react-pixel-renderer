// Mock canvas renderer for Web emulation
let canvas, ctx;

export const init = () => {
    const canvasTmp = document.querySelector("canvas");
    if (!canvasTmp) throw new Error("Canvas element not found");
    canvas = canvasTmp;

    const ctxTmp = canvas.getContext("2d");
    if (!ctxTmp) throw new Error("Canvas context not found");
    ctx = ctxTmp;
};

export const clear = () => {
    console.log("Clearing");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawText = (text, x, y, color) => {
    console.log("drawText", text, x, y, color);

    ctx.font = "24px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
};

export const drawPixel = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
};

export const stringDimensions = (text) => {
    const metrics = ctx.measureText(text);
    // const fontHeight =
    //     metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    const actualHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    return { width: metrics.width, height: actualHeight };
};

export const height = 500;
export const width = 500;
