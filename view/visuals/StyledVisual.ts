
import { ClassNameMap } from '../primitives/ClassNameMap';
import { Component, Visual } from '../primitives/index';

export interface StyledVisual<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>;
    innerRef?: React.Ref<any> | React.RefObject<any>;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}