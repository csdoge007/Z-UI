import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'


type ButtonType = 'primary' | 'danger' | 'info' | 'success' | 'warning';
type ButtonSize = 'small' | 'normal' | 'large';
type NativeType = 'submit' | 'reset' | 'button';
export interface ButtonInstance {
  _ref: HTMLButtonElement;
} 
export interface ButtonProps { 
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    nativeType?: NativeType;
    autofocus?: boolean; 
    loading?: boolean;
    icon?: object | Array<string> | string | IconDefinition;
}
