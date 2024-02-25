export type nameType = string | number;
export const activeSymbol = Symbol('activeItems');
export interface ItemProps {
  name: nameType;
  title: string;
  disabled?: boolean;
}

export interface CollapseProps {
  activeItems: string[];
  accordion?: boolean;
}

