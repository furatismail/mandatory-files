<template>
  <div class="card">
    <h2>Child komponenta</h2>
    {{ filmName }} {{ id }}
    <button @click="getFilm({ name: filmName, id: id })">Vybrat film</button>

    <hr />
    {{ film }} /// reactive clone: {{ reactiveClone }}
    <button @click="changeFilm()">change film</button>
  </div>
</template>

<script setup>
import { reactive, toRaw } from "vue";

const props = defineProps({
  filmName: {
    type: String,
    required: true,
  },
  id: String,
  film: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["addFilmToCart"]);
let reactiveClone = reactive({});
function getFilm(payload) {
  console.log(payload);
  emits("addFilmToCart", payload);
}

function changeFilm() {
  setTimeout(() => {
    const myProps = { ...props };

    // myProps.filmName = 'zmenaaaaaazmenaaaaaazmenaaaaaazmenaaaaaa'
    // myProps.id = 'zmenaaaaaazmenaaaaaazmenaaaaaazmenaaaaaa'

    // myProps.film.name = 'zmenaaaaaazmenaaaaaazmenaaaaaazmenaaaaaa'
    // myProps.film.id = 'zmenaaaaaazmenaaaaaazmenaaaaaazmenaaaaaa'

    const obj = toRaw(myProps.film);
    const clone = { ...obj };
    clone.name = "ahoj";

    Object.assign(reactiveClone, clone) 
    console.log(reactiveClone);
  }, 1000);
}
</script>

<style scoped>
.card {
  border: 1px solid grey;
  padding: 20px;
  background-color: yellow;
  margin: 10px;
}
</style>
