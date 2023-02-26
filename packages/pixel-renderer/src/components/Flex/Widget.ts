import PixelDisplay from "../PixelDisplay";
import { Widget } from "../config";
import yoga, { Yoga } from "../../utils/yoga";
import { PositionProps } from "../position";
import { ReactNode } from "react";

const stringToYoga = {
    flexDir: {
        row: Yoga.FLEX_DIRECTION_ROW,
        column: Yoga.FLEX_DIRECTION_COLUMN,
        "row-reverse": Yoga.FLEX_DIRECTION_ROW_REVERSE,
        "column-reverse": Yoga.FLEX_DIRECTION_COLUMN_REVERSE,
    },
    flexWrap: {
        wrap: Yoga.WRAP_WRAP,
        "wrap-reverse": Yoga.WRAP_WRAP_REVERSE,
        "no-wrap": Yoga.WRAP_NO_WRAP,
    },
    justifyContent: {
        center: Yoga.JUSTIFY_CENTER,
        flexStart: Yoga.JUSTIFY_FLEX_START,
        flexEnd: Yoga.JUSTIFY_FLEX_END,
        spaceBetween: Yoga.JUSTIFY_SPACE_BETWEEN,
        spaceAround: Yoga.JUSTIFY_SPACE_AROUND,
        spaceEvenly: Yoga.JUSTIFY_SPACE_EVENLY,
    },
    alignItems: {
        center: Yoga.ALIGN_CENTER,
        flexStart: Yoga.ALIGN_FLEX_START,
        flexEnd: Yoga.ALIGN_FLEX_END,
        stretch: Yoga.ALIGN_STRETCH,
        baseline: Yoga.ALIGN_BASELINE,
    },
};

export interface Props extends PositionProps {
    flexDir?: keyof typeof stringToYoga.flexDir;
    flexWrap?: keyof typeof stringToYoga.flexWrap;
    justifyContent?: keyof typeof stringToYoga.justifyContent;
    alignItems?: keyof typeof stringToYoga.alignItems;
    children: ReactNode;
}

class FlexWidget extends Widget {
    private props?: Props;
    private children: Widget[] = [];
    root: PixelDisplay;
    yogaNode: Yoga.Node;

    constructor(root: PixelDisplay) {
        super();

        this.root = root;
        this.yogaNode = yoga.Node.createDefault();

        this.yogaNode.setWidth(this.root.host.width);
        this.yogaNode.setHeight(this.root.host.height);
        this.yogaNode.setDisplay(Yoga.DISPLAY_FLEX);
    }

    appendChild(child: Widget) {
        this.children.push(child);
        if (child.yogaNode) {
            this.yogaNode.insertChild(
                child.yogaNode,
                this.yogaNode.getChildCount()
            );
        }
    }

    setProps(props: Props) {
        this.props = props;

        if (props.flexDir) {
            this.yogaNode.setFlexDirection(stringToYoga.flexDir[props.flexDir]);
        }
        if (props.flexWrap) {
            this.yogaNode.setFlexWrap(stringToYoga.flexWrap[props.flexWrap]);
        }
        if (props.justifyContent) {
            this.yogaNode.setJustifyContent(
                stringToYoga.justifyContent[props.justifyContent]
            );
        }
        if (props.alignItems) {
            this.yogaNode.setAlignItems(
                stringToYoga.alignItems[props.alignItems]
            );
        }
    }

    setChildren(children: Widget[]) {
        this.children = children;

        // Remove all Yoga children
        while (this.yogaNode.getChildCount() > 0) {
            this.yogaNode.removeChild(this.yogaNode.getChild(0));
        }

        // Add new Yoga children
        for (const child of children) {
            if (child.yogaNode) {
                this.yogaNode.insertChild(
                    child.yogaNode,
                    this.yogaNode.getChildCount()
                );
            }
        }
    }

    getChildren(): Widget[] {
        return this.children;
    }

    draw() {
        if (!this.props) {
            return;
        }

        if (this.yogaNode.isDirty()) {
            this.yogaNode.calculateLayout();
        }

        for (const child of this.children) {
            child.draw();
        }
    }
}

export default FlexWidget;
