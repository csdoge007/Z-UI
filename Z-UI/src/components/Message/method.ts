import { render, h } from 'vue'
import type { MessageProps } from './types'
import MessageConstructor from './Message.vue'

export const createMessage = (options: MessageProps) => {
  const container = document.createElement('div')
  const vnode = h(MessageConstructor, options)
  render(vnode, container)
  // 非空断言,表示变量不会是null或者undefined
  document.body.appendChild(container.firstElementChild!)
}
