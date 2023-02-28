import PixelRenderer from "../reconciler";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { ReactElement } from "react";
import { PixelDisplay } from "../components";
import { Driver } from "../components/PixelDisplay";

function render(element: ReactElement, driver: Driver) {
    const container = new PixelDisplay(driver);

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
