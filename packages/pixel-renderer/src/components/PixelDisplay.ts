export interface Driver {
    drawText(text: string, x: number, y: number, color: string): void;
    drawPixel(x: number, y: number, color: string): void;
    stringDimensions(text: string): { width: number; height: number };
    init(): void;
    clear(): void;

    width: number;
    height: number;
}

class PixelDisplay {
    driver: Driver;

    constructor(driver: Driver) {
        this.driver = driver;
        this.driver.init();
    }
}

export default PixelDisplay;
