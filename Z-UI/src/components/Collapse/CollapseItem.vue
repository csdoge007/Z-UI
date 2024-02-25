<template>
  <div class="zk-collapse-item">
    <div class="zk-collapse-item__header">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="zk-collapse-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ItemProps } from './types';

defineProps<ItemProps>();

</script>

<style scoped>
</style>
