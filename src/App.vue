<script setup>
import { ref } from 'vue';
import Tab from './components/Tab.vue';
let activeTab = ref(0);
let titles = ref(['Pictures', 'Music', 'Videos', 'Documents', 'Games']);
let contents = ref([
  'Some awesome Pictures',
  'Some awesome Music',
  'Some awesome Videos',
  'Some awesome Documents',
  'Some awesome Games',
])

function setTab(index){
  activeTab.value = index;
}
</script>

<template>
<Tab :active="activeTab" :titles="titles" @change="setTab"></Tab>
<div class="container content">
  <h1>{{ contents[activeTab] }}</h1>
</div>
</template>