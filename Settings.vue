<template>
  <div>
    <h1>Settings</h1>
    <div v-for="i in [1, 2, 3, 4, 5, 6]" class="card" :key="i">
      <router-link :to="{ name: 'SpecificSettings', params: { id: i } }">
        Nastaveni pro {{ i }}
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  padding: 20px;
  margin: 10px;
  border: 1px solid aqua;
}
</style>
