import Reconciler from "react-reconciler";

import { DefaultEventPriority } from "react-reconciler/constants.js";
import {
    PixelDisplay,
    Widget,
    UnknownProps,
    getComponent,
    ChildSet,
} from "../components";

const HostConfig: Reconciler.HostConfig<
    string,
    UnknownProps,
    PixelDisplay,
    Widget,
    any,
    any,
    any,
    any,
    any,
    any,
    ChildSet,
    any,
    any
> = {
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    now: Date.now,

    appendInitialChild(parentInstance, child) {
        return parentInstance.appendChild(child);
    },

    appendAllChildren(...args: any[]) {
        console.log("appendAllChildren", ...args);
    },

    createInstance(type, props, rootContainer, hostContext) {
        const { createInstance } = getComponent(type);
        return createInstance(props, rootContainer);
    },

    createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
        return text;
    },

    finalizeInitialChildren(wordElement, type, props) {
        return false;
    },

    getPublicInstance(inst) {
        return inst;
    },

    prepareForCommit() {
        return null;
    },

    prepareUpdate(wordElement, type, oldProps, newProps) {
        return true;
    },

    resetAfterCommit() {},

    resetTextContent(wordElement) {},

    getRootHostContext(rootInstance) {
        console.log("getRootHostContext", rootInstance);

        return rootInstance;
    },

    getChildHostContext() {
        return {};
    },

    shouldSetTextContent(type, props) {
        const { shouldSetTextContent } = getComponent(type);
        return shouldSetTextContent(props);
    },

    getCurrentEventPriority() {
        return DefaultEventPriority;
    },

    getChildHostContextForEventComponent() {},

    getChildHostContextForEventTarget() {},

    shouldDeprioritizeSubtree() {},

    noTimeout() {},

    isPrimaryRenderer: false,

    supportsMutation: false,
    supportsPersistence: true,
    supportsHydration: false,

    mountEventComponent() {},

    updateEventComponent() {},

    handleEventTarget() {},

    getEventTargetChildElement() {},

    cloneInstance(
        instance,
        updatePayload,
        type,
        oldProps,
        newProps,
        internalInstanceHandle,
        keepChildren,
        recyclableInstance
    ) {
        const { createInstance } = getComponent(type);
        const cloned = createInstance(newProps, instance.root);

        if (keepChildren) {
            instance.setChildren(cloned.getChildren());
        }

        return cloned;
    },

    createContainerChildSet(...args) {
        console.log("createContainerChildSet", args);
        return [];
    },

    appendChildToContainer(container, child) {
        console.log("appendChildToContainer", container, child);
    },

    appendChildToContainerChildSet(parentChildset, child) {
        console.log("appendChildToContainerChildSet", parentChildset, child);
        parentChildset.push(child);
    },

    finalizeContainerChildren(...args) {
        console.log("finalizeContainerChildren", args);
    },

    replaceContainerChildren(container, children) {
        console.log("replaceContainerChildren", container, children);

        container.driver.clear();

        for (const child of children) {
            child.draw();
        }
    },

    // @ts-ignore
    cloneHiddenInstance(...args) {
        console.log("cloneHiddenInstance", args);
    },

    cloneHiddenTextInstance(...args) {
        console.log("cloneHiddenTextInstance", args);
    },

    clearContainer(container) {
        container.driver.clear();

        console.log("clearContainer", container);
    },
};

export default Reconciler(HostConfig);
