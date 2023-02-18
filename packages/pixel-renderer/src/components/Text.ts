import PixelDisplay from "./PixelDisplay";

class Text {
    private root: PixelDisplay;
    private props: Record<string, unknown>;

    constructor(root: PixelDisplay, props: Record<string, unknown>) {
        this.root = root;
        this.props = props;
    }

    appendChild(child: string) {
        console.log("appendChild", child);

        // Add the string and render the text node
        this.root.drawText(child, 1, 1);
    }

    onRecoverableError() {
        console.log("onRecoverableError");
    }

    appendAllChildren(...args: any[]) {
        console.log("appendAllChildren", args);
    }
}

export default Text;
