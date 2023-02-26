import { ComponentConfig, registerComponent } from "../config";
import TextWidget, { Props } from "./Widget";
import PixelDisplay from "../PixelDisplay";

const TagName = "TEXT";

class Text extends ComponentConfig {
    tagName = TagName;

    createInstance(props: Props, root: PixelDisplay) {
        const instance = new TextWidget(root);
        instance.setProps(props);
        return instance;
    }

    shouldSetTextContent(): boolean {
        return true;
    }
}

export default registerComponent<Props>(new Text());
