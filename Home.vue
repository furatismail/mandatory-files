<template>
  <main>
    <h1>Home</h1>
    <div v-for="film in films?.data">{{ film?.film }}</div>
    <button @click="addFilm()">Add film</button>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useFilm } from "../composables/film";

const films = reactive({ data: null });
const { addFilm, getFilms } = useFilm();

(async () => {
  films.data = await getFilms();
})();

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("Do you want really leave?");
  if (!answer) {
    return false;
  }
});
</script>
