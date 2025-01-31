import { render, h } from 'vue'
import type { MessageProps } from './types'
import type { CreateMessageProps } from './types'
import MessageConstructor from './Message.vue'

export const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div')
  const destory = () => {
    render(null, container)
  }
  const newProps = {
    ...props,
    onDestory: destory,
  }
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)
  // 非空断言,表示变量不会是null或者undefined
  document.body.appendChild(container.firstElementChild!)
}
