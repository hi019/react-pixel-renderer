export interface Drawer {
    drawText(text: string, x: number, y: number, color: string): void;
    drawPixel(x: number, y: number, color: string): void;
    stringDimensions(text: string): { width: number; height: number };
    init(): void;
    clear(): void;

    width: number;
    height: number;
}

class PixelDisplay {
    host: Drawer;

    constructor(host: Drawer) {
        this.host = host;
        this.host.init();
    }
}

export default PixelDisplay;
