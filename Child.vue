<template>
    <div class="card">
        Potomek: {{ id }} {{ film }}
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
</script>

<style scoped>
.card {
    border: 1px solid #000;
    background-color: yellow;
    padding: 20px;
    margin: 10px;
}
</style>