import PixelRenderer from "../reconciler";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { ReactElement } from "react";
import { PixelDisplay } from "../components";
import { Drawer } from "../components/PixelDisplay";

async function render(element: ReactElement, host: Drawer) {
    const container = new PixelDisplay(host);

    const node = PixelRenderer.createContainer(
        container,
        ConcurrentRoot,
        null,
        false,
        null,
        "",
        (error) => console.error("React error: ", error),
        null
    );

    PixelRenderer.updateContainer(element, node, null);
}

export default render;
