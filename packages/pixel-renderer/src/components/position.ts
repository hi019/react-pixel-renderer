import { Yoga } from "../utils/yoga";

export const DISPLAY_FLEX = Yoga.DISPLAY_FLEX;
export const DISPLAY_NONE = Yoga.DISPLAY_NONE;
export type Display = typeof DISPLAY_FLEX | typeof DISPLAY_NONE;

export const POSITION_TYPE_ABSOLUTE = Yoga.POSITION_TYPE_ABSOLUTE;
export const POSITION_TYPE_RELATIVE = Yoga.POSITION_TYPE_RELATIVE;
export type Position =
    | typeof POSITION_TYPE_ABSOLUTE
    | typeof POSITION_TYPE_RELATIVE;

export interface PositionProps {
    top?: number;
    left?: number;
    display?: Display;
    positionType?: Position;
}
