<template>
  <div>
    <div v-for="review in reviews">
      <Child :id="review.id" :film="review.film" @addFilm="updateCart($event)"></Child>
    </div>

    Kosik: {{ chosenFilms }}
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Child from './Child.vue'
import EventBus from '../utils/EventBus.vue'

const reviews = reactive([
  { id: 'x', film: 'Alien vs Predator' },
  { id: 'xx', film: 'Alien vs Predator II' },
  { id: 'xxx', film: 'Alien vs Predator III' }
])

const chosenFilms = reactive([])

function updateCart($event) {
  console.log('Prichozi $event', event)
  chosenFilms.push($event)
  EventBus.$emit("COUNT_FILMS", chosenFilms.length)
}
</script>

<style scoped></style>
