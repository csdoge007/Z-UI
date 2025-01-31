import { render, h } from 'vue'
import type { MessageContext } from './types'
import type { CreateMessageProps } from './types'
import MessageConstructor from './Message.vue'

const instances: MessageContext[] = []
let seed = 1
export const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div')
  const id = `message_${seed++}`
  const destory = () => {
    const idx = instances.findIndex((item) => item.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
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
  const instance = {
    id,
    vnode,
    props: newProps,
  }
  instances.push(instance)
  return instance
}

export const getLastInstance = () => {
  return instances[instances.length - 1]
}
