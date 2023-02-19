export interface Drawer {
    drawText(text: string, x: number, y: number, color: string): void;
    drawPixel(x: number, y: number): void;
    init(): void;
    clear(): void;
}

class PixelDisplay {
    host: Drawer;

    constructor(host: Drawer) {
        this.host = host;
        this.host.init();
    }

    drawText(text: string, row: number, col: number, color: string) {
        this.host.drawText(text, row, col, color);
    }

    drawPixel(x: number, y: number) {
        this.host.drawPixel(x, y);
    }

    clear() {
        this.host.clear();
    }
}

export default PixelDisplay;
