import Reconciler from "react-reconciler";

import { createElement, getHostContextNode } from "../utils/createElement.ts";
import { DefaultEventPriority } from "react-reconciler/constants.js";

const PixelRenderer = Reconciler({
    appendInitialChild(parentInstance, child) {
        console.log("appendInitialChild", parentInstance, child);

        // TODO look into this
        if (parentInstance.appendChild) {
            parentInstance.appendChild(child);
        } else {
            // parentInstance.document = child;
        }
    },

    appendAllChildren(...args) {
        console.log("appendAllChildren", ...args);
    },

    createInstance(type, props, internalInstanceHandle) {
        console.log("createInstance", type, props, internalInstanceHandle);

        return createElement(type, props);
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

    resetAfterCommit() {
        // noop
    },

    resetTextContent(wordElement) {
        // noop
    },

    getRootHostContext(rootInstance) {
        console.log("getRootHostContext", rootInstance);

        return getHostContextNode(rootInstance);
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

    getChildHostContextForEventComponent() {
        // noop
    },

    getChildHostContextForEventTarget() {
        // noop
    },

    shouldDeprioritizeSubtree() {
        // noop
    },

    scheduleTimeout(...args) {
        console.log("scheduleTimeout", args);
        // noop
    },

    cancelTimeout() {
        // noop
    },

    noTimeout() {
        // noop
    },

    now: () => {},

    isPrimaryRenderer: false,

    supportsMutation: false,
    supportsPersistence: true,
    supportsHydration: false,

    mountEventComponent() {
        // noop
    },

    updateEventComponent() {
        // noop
    },

    handleEventTarget() {
        // noop
    },

    getEventTargetChildElement() {
        // noop
    },

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

        return createElement(type, newProps);
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
        // TODO is this correct
        // parentChildset.push(child);
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
