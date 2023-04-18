<template>
    <div>
        {{ title }}
    </div>
</template>

<script setup>
  const title = 'Composition API';

  function greet() {
        console.log(this.title);
  }
</script>

<style scoped>

</style>