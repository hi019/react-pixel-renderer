import { createElement } from "../utils/createElement";
import PixelRenderer from "../reconciler";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { ReactElement } from "react";

// renders the component
async function render(element: ReactElement) {
    const container = createElement("ROOT", {});

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
