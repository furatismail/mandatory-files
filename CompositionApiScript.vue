<template>
  <div>
    {{ title }}

    <button @click="changeTitle()">Změn title</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Composition API script');
console.log('Čo je title 1:', title);

function greet() {
  console.log(title)
}

function changeTitle() {
  setTimeout(() => {
    title.value = 'Něco jiného'
    console.log('Čo je title 2:', title);
  }, 1000)
}
</script>

<style scoped></style>
