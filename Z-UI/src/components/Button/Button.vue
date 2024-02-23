<template>
  <button 
    ref="_ref"
    class="vk-button" 
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
defineOptions({
  name: 'ZkButton'
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
const _ref = ref<HTMLButtonElement>();
defineExpose({
  _ref,
})
</script>

<style scoped></style>
