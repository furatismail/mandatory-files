<template>
  <div>
    {{ title }}

    <button @click="changeTitle()">Změn title</button>
  </div>
</template>

<script setup>
let title = 'Composition API script'

function greet() {
  console.log(title)
}

function changeTitle() {
  setTimeout(() => {
    title = 'Něco jiného'
    console.log('Čo je title:', title);
  }, 1000)
}
</script>

<style scoped></style>
