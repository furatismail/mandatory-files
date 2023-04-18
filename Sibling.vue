<template>
  <div>{{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'
import EventBus from '../utils/EventBus.vue'

const count = ref(0)
EventBus.$on('COUNT_FILMS', (data) => {
  count.value = data
})
</script>

<style scoped></style>
