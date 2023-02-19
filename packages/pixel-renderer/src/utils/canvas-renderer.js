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
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const drawText = (text, row, col, color) => {
    console.log("drawText", text, row, col, color);

    ctx.font = "24px Arial";
    ctx.fillStyle = color;
    const x = col * 24;
    const y = (row + 1) * 24;
    ctx.fillText(text, x, y);
};

export const drawPixel = (x, y) => {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 1, 1);
};
