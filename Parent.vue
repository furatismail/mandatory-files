<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <Child :price="review.price" :id="review.id" :film="review.film" @addFilm="updateCart($event)"></Child>
    </div>
    <br />
    <br />
    <br />
    Kosik: {{ chosenFilms }}
    <br />
    Celkova cena zbozi: {{ finalPrice }}
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Child from './Child.vue'
import EventBus from '../utils/EventBus.vue'

const reviews = reactive([
  { id: 'x', film: 'Alien vs Predator', price: 10 },
  { id: 'xx', film: 'Alien vs Predator II', price: 20 },
  { id: 'xxx', film: 'Alien vs Predator III', price: 5 }
])
const chosenFilms = reactive([])
const finalPrice = computed(() => {
  if (chosenFilms.length === 0) {
    return 0
  }

  return chosenFilms.reduce((accumulator, item) => {
    console.log('accumulator', accumulator)
    console.log('item', item)
    return accumulator + item.price
  }, 0)
})

function updateCart($event) {
  console.log('Prichozi $event', event)
  chosenFilms.push($event)
  EventBus.$emit('COUNT_FILMS', chosenFilms.length)
}
</script>

<style scoped></style>
