<script setup>
import { useCounterStore } from "@/store/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    Son1.vue - 0 - {{ counterStore.count }} - {{ counterStore.double }}
     - <button @click="counterStore.addCount()">+</button>
  </div>
</template>

<style scoped></style>

