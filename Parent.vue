<template>
    <div>
        <div v-for="review in reviews">{{ review.film }}</div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

    const reviews = reactive(
        [
            {id: "x", film: "Alien vs Predator"},
            {id: "xx", film: "Alien vs Predator II"},
            {id: "xxx", film: "Alien vs Predator III"},
        ]
    )
</script>

<style scoped>

</style>