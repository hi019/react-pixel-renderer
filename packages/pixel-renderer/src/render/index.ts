import { createElement } from "../utils/createElement.js";
import PixelRenderer from "../reconciler/index.js";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { ReactElement } from "react";
import { PixelDisplay } from "../components";
import * as host from "../utils/canvas-renderer.js";

async function render(element: ReactElement) {
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

    // PixelRenderer.injectIntoDevTools({
    //     bundleType: 1,
    //     version: "0.0.1",
    //     rendererPackageName: "pixel-renderer",
    //     findHostInstanceByFiber: PixelRenderer.findHostInstance,
    // });
}

export default render;
