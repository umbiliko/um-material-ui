

import { Component, Visual } from '../primitives/index';

export interface TextareaProps
  extends Component<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      TextareaClassKey,
      'rows'
    > {
  defaultValue?: any;
  disabled?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  textareaRef?: React.Ref<any> | React.RefObject<any>;
  value?: string;
}

export type TextareaClassKey = 'root' | 'shadow' | 'textarea';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
