<template>
  <button 
    ref="_ref"
    class="zk-button" 
    :class="{
      [`zk-button--${type}`]: type,
      [`zk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
  <Icon icon="spinner" spin v-if="loading"></Icon>
  <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
import Icon from '../Icon/Icon.vue';
defineOptions({
  name: 'ZkButton'
});
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
const _ref = ref<HTMLButtonElement>();
defineExpose({
  _ref,
})
</script>

<style scoped></style>
