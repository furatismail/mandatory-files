<template>
    <div>
        <h1>Specific settings komponenta</h1>
        {{ route.params?.id }}

    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
const route = useRoute();
console.log(route);
</script>

<style scoped>

</style>
