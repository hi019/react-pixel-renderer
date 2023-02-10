import * as host from "../utils/canvas-renderer.js";

class PixelDisplay {
    constructor() {
        host.init();
    }

    drawText(text: string, row: number, col: number) {
        host.drawText(text, row, col);
    }

    drawPixel(x: number, y: number) {
        host.drawPixel(x, y);
    }

    clear() {
        host.clear();
    }
}

export default PixelDisplay;
