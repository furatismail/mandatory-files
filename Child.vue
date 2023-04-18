<template>
    <div class="card">
        Potomek: {{ id }} {{ film }}
        <button @click="getFilm({id, film})">VYBRAT FILM</button>
    </div>
</template>

<script setup>

defineProps({
    id: String,
    film: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['addFilm']);

function getFilm(clickedFilm) {
    console.log('clickedFilm: ', clickedFilm)
    emits('addFilm', clickedFilm)
}

</script>

<style scoped>
.card {
    border: 1px solid #000;
    padding: 20px;
    margin: 10px;
}
</style>
