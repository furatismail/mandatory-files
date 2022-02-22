<template>
    <div>
        <h1>Settings</h1>

        <div v-for="i in [1,2,3,4,5]">
        <!-- <router-link
        to="/SpecificSettings">redirect</router-link> -->
            <button @click="redirect(i)">Redirect</button>

        </div> 


    </div>
</template>

<script setup>
import router from '../router';

    function redirect(i) {
        router.push({ name: 'SpecificSettings', params: { id: i } })
    }
</script>

<style lang="scss" scoped>

</style>
