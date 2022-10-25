<template>
    <div class="dialog" v-show="show" @click.stop="hideDialog">
        <div @click.stop class="dialog_content">
            <slot>

            </slot>
        </div>
    </div>
</template>   

<script>
export default {
    name:"my-dialog",
    props: {
        show:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        hideDialog() {
            this.$emit("update:show", false)
        }
    }
}
</script>

<style scoped>
    .dialog {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog_content {
        margin: auto;
        background: whitesmoke;
        border-radius: 12px;
        min-height: 50;
        min-height: 200;
        padding: 20px 20px;
    }
</style>
