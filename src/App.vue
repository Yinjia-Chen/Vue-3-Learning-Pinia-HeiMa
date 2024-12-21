
<script setup>
import Son1Com from "@/components/Son1Com.vue";
import Son2Com from "@/components/Son2Com.vue";
import { useCounterStore } from "@/store/counter";
import { useChannelStore } from "@/store/channel";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const channelStore = useChannelStore();

const { count, msg } = storeToRefs(counterStore);
const { channelList } = storeToRefs(channelStore);
const { getList } = channelStore;
</script>

<template>
  <div>
    <h3>App.vue 根组件 - {{ count }} - {{ msg }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
      <li>音乐</li>
    </ul>
  </div>
</template>

<style scoped></style>
