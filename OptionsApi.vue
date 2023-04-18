<template>
    <div>
        {{ title }}

        <button @click="changeTitle()">
            Změn title
        </button>
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
            },
            changeTitle() {
                setTimeout(() => {
                    this.title = 'Něco jiného';
                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
