import { ComponentConfig, registerComponent, Widget } from "../config";
import PixelDisplay from "../PixelDisplay";
import FlexWidget, { Props } from "./Widget";

const TagName = "FLEX";

class Flex extends ComponentConfig {
    tagName = TagName;

    shouldSetTextContent(): boolean {
        return false;
    }

    createInstance(props: Props, root: PixelDisplay): Widget {
        const instance = new FlexWidget(root);
        instance.setProps(props);
        return instance;
    }
}

export default registerComponent<Props>(new Flex());
