import PixelDisplay from "../PixelDisplay";
import { PositionProps } from "../position";
import { Widget } from "../config";
import yoga, { Yoga } from "../../utils/yoga";

export interface Props extends PositionProps {
    color?: string;
    children: string;
}

class TextWidget extends Widget {
    private props?: Props;
    root: PixelDisplay;
    yogaNode: Yoga.Node;

    constructor(root: PixelDisplay) {
        super();

        this.root = root;
        this.yogaNode = yoga.Node.createDefault();
    }

    appendChild(child: string) {}

    setProps(props: Props) {
        this.props = props;

        if (props.display) {
            this.yogaNode.setDisplay(props.display);
        }
        if (props.positionType) {
            if (props.left) {
                this.yogaNode.setPosition(Yoga.EDGE_LEFT, props.left);
            }
            if (props.top) {
                this.yogaNode.setPosition(Yoga.EDGE_TOP, props.top);
            }
        }

        const { width, height } = this.root.driver.stringDimensions(
            this.props.children
        );
        this.yogaNode.setWidth(width);
        this.yogaNode.setHeight(height);
    }

    setChildren(children: Widget[]) {
        return children;
    }

    getChildren(): Widget[] {
        return [];
    }

    draw() {
        if (!this.props) {
            return;
        }

        if (this.yogaNode.isDirty()) {
            this.yogaNode.calculateLayout();
        }

        this.root.driver.drawText(
            this.props.children,
            this.yogaNode.getComputedLeft(),
            this.yogaNode.getComputedTop(),
            this.props.color || "blue"
        );
    }
}

export default TextWidget;
