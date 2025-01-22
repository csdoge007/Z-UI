<template>
  <div
    class="vk-message"
    role="alert"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000
})
</script>

<style scoped>
</style>
