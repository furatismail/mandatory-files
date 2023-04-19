<template>
  <div>
    <h1>Home</h1>
    <button @click="getFilmsThen()">Then / Catch</button>
    <button @click="getFilmsAsync()">Async / Await</button>
  </div>
</template>

<script setup>
import FilmService from '../services/FilmService'

await getFilmsAsync();

function getFilmsThen() {
  FilmService.getFilms()
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

async function getFilmsAsync() {
  try {
    const response = await FilmService.getFilms()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
