<template>
  <div class="zk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import type { NameType, CollapseProps, CollapseEmits } from './types';
import { collapseContextSymbol } from './types';
defineOptions({
  name: 'ZkCollapse'
})
const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeItems = ref<NameType[]>(props.modelValue);
watch(() => props.modelValue, () => {
  activeItems.value = props.modelValue;
})
const handleClickItem = (name: NameType) => {
  if (props.accordion) {
    activeItems.value = activeItems.value[0] === name ? [] : [name]; 
  } else {
    const index = activeItems.value.indexOf(name);
    if (index != -1) {
      activeItems.value.splice(index, 1);
    } else {
      activeItems.value.push(name);
    }
  }
  emits('update:modelValue', activeItems.value);
};
provide(collapseContextSymbol, {
  activeItems,
  handleClickItem,
});
</script>

<style scoped>
</style>
