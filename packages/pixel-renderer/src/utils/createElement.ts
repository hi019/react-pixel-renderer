import PixelDisplay from "../components/PixelDisplay.js";
import Text from "../components/Text.js";

export function createElement(
    root: PixelDisplay,
    type: string,
    props: Record<string, unknown>
) {
    console.log("createElement", root, type, props);

    const COMPONENTS = {
        TEXT: () => new Text(root, props),
    };

    return COMPONENTS[type as keyof typeof COMPONENTS]() || (() => undefined);
}
