import type { InjectionKey, Ref } from 'vue'
export type NameType = string | number;
interface CollapseContext {
  activeItems: Ref<NameType[]>;
  handleClickItem: (name: NameType) => void;
}
export const collapseContextSymbol = Symbol('activeSymbol') as InjectionKey<CollapseContext>;
export interface ItemProps {
  name: NameType;
  title: string;
  disabled?: boolean;
}

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType[]): void;
}

