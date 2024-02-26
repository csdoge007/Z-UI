<template>
  <div 
    class="zk-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="zk-collapse-item__header" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div 
      class="zk-collapse-item__content"
      v-show="isActive"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemProps } from './types';
import { computed, inject } from 'vue';
import { collapseContextSymbol } from './types';
const props = defineProps<ItemProps>();
const collapseContext = inject(collapseContextSymbol);
const isActive = computed(() => collapseContext?.activeItems.value.includes(props.name));
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  collapseContext?.handleClickItem(props.name);
}
</script>

<style scoped>
</style>
