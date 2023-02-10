import PixelDisplay from "../components/PixelDisplay";
import Text from "../components/Text";

function createElement(
    type: "ROOT" | "TEXT",
    props: Record<string, unknown>,
    root: PixelDisplay
) {
    console.log("createElement", type, props, root);

    const COMPONENTS = {
        ROOT: () => new PixelDisplay(),
        TEXT: () => new Text(root, props),
        default: undefined,
    };

    return COMPONENTS[type]() || COMPONENTS.default;
}

export { createElement };
