<template>
  <div>
    <h1>About</h1>
    {{ count }}

    <button @click="plusOne()">+1</button>

    {{ getChosenFilmsLength }}

    {{getFilmById('1')}}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounter } from "../composables/counter";
import { useFilmStore } from "../stores/film";
const { count, plusOne } = useCounter(10);
const filmStore = useFilmStore();
const { getChosenFilmsLength, getFilmById } = storeToRefs(filmStore);
</script>

<style scoped></style>
