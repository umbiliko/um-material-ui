

import { InputVisual } from './InputVisual';
import { MenuVisual } from './MenuVisual';
import { SelectInputVisual } from './SelectInputVisual';

export interface SelectVisual extends Component<InputVisual, SelectClassKey, 'value' | 'onChange'>,
    Pick<SelectInputVisual, 'onChange'> {
  autoWidth?: boolean;
  displayEmpty?: boolean;
  IconComponent?: VisualType;
  input?: Node;
  MenuProps?: Partial<MenuVisual>;
  multiple?: boolean;
  native?: boolean;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  renderValue?: (value: SelectVisual['value']) => Node;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  value?: Array<string | number | boolean> | string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type SelectClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  | 'filled'
  | 'outlined';

