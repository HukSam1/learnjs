<script setup>
import { computed, ref } from "vue";
import itemList from "./components/itemList.vue";

let message = ref("Hello vue");
let isDanger = ref(false);
let newItem = ref('Viin');
let i = 0;
let items = ref([
    {id: i++, name: 'Viinapudeli alus', isDone: false},
    {id: i++, name: 'leib', isDone: false},
    {id: i++, name: 'soomemahl', isDone: true},
    {id: i++, name: 'saunarätik', isDone: false},
]);

function add(){
    if(newItem.value.trim() !== ''){
    items.value.push({id: i++, name: newItem.value, isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));

</script>

<template>
  <div class="container mt-2">
    <div class="content">
      <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
      <h1>{{ message }}</h1>
      <button class="button" :class="{ 'is-danger': isDanger, 'is-warning': !isDanger }"
        @click="isDanger = !isDanger">Cool button</button>


      <div class="field has-addons mt-2">
        <div class="control is-expanded">
          <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add item" >
        </div>
        <div class="control">
          <button class="button is-info" @click="items.push(newItem)">
            Add item
            </button>
        </div>
      </div>
      <h1>{{ newItem.split('').reverse().join('') }}</h1>


      
          <itemList :items="items" title="All Items"></itemList>
          <itemList :items="doneItems" title="Done Items"></itemList>
          <itemList :items="toDoitems" title="Todo Items"></itemList>
    </div>
  </div>
</template>
