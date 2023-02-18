import Reconciler from "react-reconciler";

import { createElement } from "../utils/createElement.ts";
import { DefaultEventPriority } from "react-reconciler/constants.js";

const PixelRenderer = Reconciler({
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,

    appendInitialChild(parentInstance, child) {
        console.log("appendInitialChild", parentInstance, child);

        if (parentInstance.appendChild) {
            parentInstance.appendChild(child);
        } else {
            throw new Error("Parent is not a container");
        }
    },

    appendAllChildren(...args) {
        console.log("appendAllChildren", ...args);
    },

    createInstance(type, props, rootContainer, hostContext) {
        console.log("createInstance", type, props, rootContainer, hostContext);

        return createElement(rootContainer, type, props);
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
        return false;
    },

    getCurrentEventPriority() {
        return DefaultEventPriority;
    },

    getChildHostContextForEventComponent() {},

    getChildHostContextForEventTarget() {},

    shouldDeprioritizeSubtree() {},

    noTimeout() {},

    now: () => {},

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
        console.log("cloneInstance", {
            instance,
            updatePayload,
            type,
            oldProps,
            newProps,
            internalInstanceHandle,
            keepChildren,
            recyclableInstance,
        });

        // TODO will instance.rootContainer work
        return createElement(instance.rootContainer, type, newProps);
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

    replaceContainerChildren(...args) {
        console.log("replaceContainerChildren", args);
    },

    cloneHiddenInstance(...args) {
        console.log("cloneHiddenInstance", args);
    },

    cloneHiddenTextInstance(...args) {
        console.log("cloneHiddenTextInstance", args);
    },

    clearContainer(container) {
        console.log("clearContainer", container);
    },
});

export default PixelRenderer;
