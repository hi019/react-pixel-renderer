// Mock canvas renderer for Web emulation
import { Driver } from "../components/PixelDisplay";

let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
const driver: Driver = {
    height: 500,
    width: 500,
    init() {
        const canvasTmp = document.querySelector("canvas");
        if (!canvasTmp) throw new Error("Canvas element not found");
        canvas = canvasTmp;

        const ctxTmp = canvas.getContext("2d");
        if (!ctxTmp) throw new Error("Canvas context not found");
        ctx = ctxTmp;
    },
    clear() {
        console.log("Clearing");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawText(text: string, x: number, y: number, color: string) {
        console.log("drawText", text, x, y, color);

        ctx.font = "24px Arial";
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    },
    drawPixel(x: number, y: number, color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    },
    // TODO this function returns one width for the first call, and then another for all next calls, when given the same text?
    stringDimensions(text: string): { width: number; height: number } {
        const metrics = ctx.measureText(text);
        const actualHeight =
            metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

        return { width: metrics.width, height: actualHeight };
    },
};

export default driver;
