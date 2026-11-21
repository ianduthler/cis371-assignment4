<template>
  <div class="baseBeverage"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  background-color: v-bind("beverageStore.currentBase.color");
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
