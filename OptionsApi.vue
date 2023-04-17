<template>
    <div>
        {{ title }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Options API"
            }
        },
        methods: {
            greet() {
                console.log(this.title)
            }
        }
    }
</script>

<style scoped>

</style>
