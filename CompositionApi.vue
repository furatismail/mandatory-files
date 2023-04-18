<template>
    <div>
        {{ title }}
    </div>
</template>

<script>
export default {
    setup () {
        const title = 'Composition API';

        function greet() {
            console.log(this.title);
        }

        return {
            title,
            greet
        }
    }
}
</script>

<style scoped>

</style>