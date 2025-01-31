import type { VNode } from 'vue'
export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  onDestory: () => void;
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory'>