<template>
  <i class="zk-icon" :class="{[`zk-icon--${type}`]: type}" :style="customColor">
    <FontAwesomeIcon v-bind="filteredProps"/>
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconProps } from './types';
import { omit } from 'lodash';
import { computed } from 'vue';
defineOptions({
  name: 'ZkIcon',
})
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ['color', 'type']));
const customColor = computed(() => props.color ? {color:props.color} : {});
</script>

<style scoped>

</style>
