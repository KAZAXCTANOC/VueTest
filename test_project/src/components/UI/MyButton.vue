<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"MyButton"
}
</script>

<style scoped>
    .btn {
        padding: 15px 10px;
        background: none;
        color: teal;
        border: 1px solid teal;
        width: 150px;
    }
</style>