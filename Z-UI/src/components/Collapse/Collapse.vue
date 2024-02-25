<template>
  <div class="zk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { nameType } from './types';
const activeItems = ref<nameType[]>([])
const handleClickItem = (name: nameType) => {
  const index = activeItems.value.indexOf(name);
  if (index != -1) {
    activeItems.value.splice(index, 1);
  } else {
    activeItems.value.push(name);
  }
}
</script>

<style scoped>

</style>
