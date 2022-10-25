<template>
    <div>
        <form @submit.prevent>
            <h3>Создание поста</h3>
            <my-input v-model="post.title" class="myInput" type="text" placeholder="Наименование поста"></my-input>
            <my-input v-model="post.body" class="myLastInput" type="text" placeholder="Описание поста"></my-input>
        </form>
        <MyButton @click="createPost">Добавить пост</MyButton>
    </div>
</template>   

<script>
export default {
    data() {
        return {
            post:{
                title : "",
                body : ""
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title : "",
                body : ""
            }
        }
    }
}
</script>

<style scoped>
</style>
