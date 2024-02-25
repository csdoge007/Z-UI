<script setup lang="ts">
import Collapse from './components/Collapse/Collapse.vue';
import Item from './components/Collapse/CollapseItem.vue';

import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';
const buttonInstance = ref<ButtonInstance | null>();
onMounted(() => {
  if (buttonInstance.value) {
    console.log(buttonInstance.value._ref);
  }
})
const activeItems = ['A'];
</script>

<template>
  <!-- <Button ref="buttonInstance">TestButton</Button>
      
    <Button ref="buttonRef">Test Button</Button> -->
  <main>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button disabled>Disabled</Button><br /><br />

    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
    <Button disabled plain>Disabled</Button><br /><br />

    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
    <Button disabled round>Disabled</Button><br /><br />

    <Button circle>circle</Button>
    <Button type="primary" circle>Primary</Button>
    <Button type="success" circle>Success</Button>
    <Button type="info" circle>Info</Button>
    <Button type="warning" circle>Warning</Button>
    <Button type="danger" circle>Danger</Button>
    <Button disabled circle>Disabled</Button><br /><br />



    <Button size="large">Large</Button>
    <Button size="small">Small</Button>
    <Collapse :activeItems="activeItems">
      <Item title="标题" name="A">
        <template #title>
          <h1>Here might be a page title</h1>
        </template>
        content
      </Item>
    </Collapse>


  </main>
</template>

<style scoped></style>
