
import { Node, Visual } from '../primitives/index';

export interface NativeSelectInputVisual {
  disabled?: boolean;
  IconComponent?: string;
  inputRef?: (
    ref: HTMLSelectElement | { node: HTMLInputElement; value: NativeSelectInputVisual['value'] },
  ) => void;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child: Node) => void;
  value?: string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
