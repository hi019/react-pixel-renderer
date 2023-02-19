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

        this.root.drawText(
            child,
            1,
            1,
            (this.props.color as string) || "white"
        );
    }

    appendAllChildren(...args: any[]) {
        console.log("appendAllChildren", args);
    }
}

export default Text;
