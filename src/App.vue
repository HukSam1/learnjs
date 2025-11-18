<script setup>
import { ref } from 'vue';

    let message = ref('Hello vue');
    let isDanger = ref(false);
</script>

<template>
    <div class="content">
        <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
         <h1>{{ message }}</h1>
         <button class="button" :class="{'is-danger': isDanger, 'is-warning': !isDanger}" @click="isDanger = !isDanger">Cool button</button>
    </div>
</template>