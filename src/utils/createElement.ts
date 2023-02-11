import PixelDisplay from "../components/PixelDisplay.js";
import Text from "../components/Text.js";

let ROOT_NODE_INSTANCE: PixelDisplay | null = null;

export function getHostContextNode(rootNode?: PixelDisplay) {
    if (rootNode) {
        return (ROOT_NODE_INSTANCE = rootNode);
    } else {
        return (ROOT_NODE_INSTANCE = new PixelDisplay());
    }
}

export function createElement(type: string, props: Record<string, unknown>) {
    console.log("createElement", type, props);

    if (!ROOT_NODE_INSTANCE && type !== "ROOT") {
        console.warn("createElement: No root node instance found");
    }

    const COMPONENTS = {
        ROOT: () => new PixelDisplay(),
        TEXT: () => new Text(ROOT_NODE_INSTANCE!, props),
    };

    return COMPONENTS[type as keyof typeof COMPONENTS]() || (() => undefined);
}
