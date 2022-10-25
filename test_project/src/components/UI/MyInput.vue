<template>
    <input :value="modelValue" @input="updateInput" class="myInput" type="text">
</template>

<script>
export default {
    name:"my-input",
    props: {
        modelValue: [String, Number]
    },
    methods :{
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
    .myInput {
        width: 100%;
        border: 1px solid wheat;
        padding: 10px;
        margin-top: 10px;
    }
</style>