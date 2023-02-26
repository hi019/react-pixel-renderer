import React from "react";
import PixelDisplay from "./PixelDisplay";
import { Yoga } from "../utils/yoga";

export interface UnknownProps {}

export type ChildSet = Widget[];

export abstract class Widget {
    yogaNode: Yoga.Node | undefined;
    abstract root: PixelDisplay;

    abstract appendChild(child: Widget | string): void;
    abstract setProps(newProps: UnknownProps): void;
    abstract setChildren(children: Widget[]): void;
    abstract getChildren(): Widget[];
    abstract draw(): void;
}

export abstract class ComponentConfig {
    abstract tagName: string;
    abstract createInstance(props: UnknownProps, root: PixelDisplay): Widget;
    abstract shouldSetTextContent(nextProps: UnknownProps): boolean;
}

const components: Record<string, ComponentConfig> = {};

export function registerComponent<Props>(
    component: ComponentConfig
): string | React.ComponentType<Props> {
    components[component.tagName] = component;
    return component.tagName;
}

export function getComponent(tagName: string): ComponentConfig {
    return components[tagName];
}
