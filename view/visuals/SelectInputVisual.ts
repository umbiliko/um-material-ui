
import { MenuVisual } from './MenuVisual';
import { Component, Visual } from '../primitives/index';

export interface SelectInputVisual {
  autoFocus?: boolean;
  autoWidth: boolean;
  disabled?: boolean;
  IconComponent?: VisualType;
  inputRef?: (
    ref: HTMLSelectElement | { node: HTMLInputElement; value: SelectInputVisual['value'] },
  ) => void;
  MenuProps?: Partial<MenuVisual>;
  multiple: boolean;
  name?: string;
  native: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child: Node) => void;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onFocus?: React.FocusEventHandler<any>;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  readOnly?: boolean;
  renderValue?: (value: SelectInputVisual['value']) => Node;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  tabIndex?: number;
  value?: string | number | boolean | Array<string | number | boolean>;
  variant?: 'standard' | 'outlined' | 'filled';
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
