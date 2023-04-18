<template>
  <div>
    {{ title }}

    obj1: {{ obj }}
    <hr>
    obj2: {{ obj2 }}


    <button @click="changeTitle()">Změn title</button>
    <button @click="changeObj()">Změn obj</button>
    <button @click="changeObj2()">Změn obj 2</button>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

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

//////////////////////////////////////////////

let obj = ref({
    firstName: "Jan",
    lastName: "Novak"
})

function changeObj() {
  setTimeout(() => {
    obj.value.firstName = 'Honza'
  }, 1000)
}

//////////////////////////////////////////////

let obj2 = reactive({
    firstName: "Jan2",
    lastName: "Novak2"
})

function changeObj2() {
  setTimeout(() => {
    obj2.firstName = 'Honza'
  }, 1000)
}





</script>

<style scoped></style>
