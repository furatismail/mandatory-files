<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup>
import FilmService from '../services/FilmService'

FilmService.getFilms()
  .then((response) => {
    console.log(response)
  })
  .catch((error) => console.log(error))
</script>

<style scoped></style>
