This is a custom React renderer designed to render to a pixelated display. The project is not coupled to any specific host environment,
it uses an interface to draw. The interface looks like this:

```ts
interface Driver {
    drawText(text: string, x: number, y: number, color: string): void;
    drawPixel(x: number, y: number, color: string): void;
    // Get the height and width of some text
    stringDimensions(text: string): { width: number; height: number };
    
    init(): void;
    // Clear the entire display
    clear(): void;

    // Display height and width
    width: number;
    height: number;
}
```
Two driver interfaces are provided: one for a Pi-powered Adafruit LED Matrix and another for browser canvas.
Also, a Flexbox implementation is provided, based on [Yoga](https://github.com/facebook/yoga). There are examples in playground/.

<img width="346" alt="CleanShot 2024-11-25 at 19 02 23@2x" src="https://github.com/user-attachments/assets/5a089eed-2214-442f-a961-44fa17aecf18">


**Resources**

* Based on [Making a Custom React Renderer](https://github.com/nitin42/Making-a-custom-React-renderer/blob/master/part-one.md)
* Canvas implementation from [React on an OLED Display](https://github.com/doodlewind/react-ssd1306/blob/master/docs/tutorial.md)
