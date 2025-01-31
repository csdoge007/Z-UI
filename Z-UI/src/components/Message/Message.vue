<template>
  <div
    class="vk-message"
    role="alert"
    v-if="visible"
    :class="{
      [`vk-message--${type}`]: type,
      'is-close': showClose
    }"
  >
    <div class="vk-message__content">
      <slot>
        <RenderVnode :vNode="message" v-if="message" />
      </slot>
    </div>
    <div class="vk-message__close" v-if="showClose">
      <Icon @click.stop="$event => visible = false" icon="xmark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 2800
})
const visible = ref(true)
const startCloseTimer = () => {
  if (props.duration <= 0) return
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}
onMounted(() => {
  startCloseTimer()
})
watch(visible, () => {
  if (!visible.value) {
    props.onDestory()
  }
})
</script>

<style scoped>
.vk-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  border: 1px solid blue;
}
</style>
