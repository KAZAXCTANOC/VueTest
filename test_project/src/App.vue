<template>
    <div class="app">
        <MyButton @click="showDilaog">Добавить пост</MyButton>
        <my-dialog v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </my-dialog>
        <PostList :posts="posts" @remove="removePost" v-show="posts.length != 0"/>
        <h3 v-if="posts.length == 0">Список постов пуст</h3>
    </div>
</template>

<script>
    import PostForm from './components/PostForm.vue';
    import PostList from './components/PostList.vue';

    export default {
        components:{
            PostForm, PostList
        },

        data() {
            return {
                posts:[
                    { id:0, title: "Post name 1",body: "Body post number 1"},
                    { id:1, title: "Post name 2",body: "Body post number 2"},
                    { id:2, title: "Post name 3",body: "Body post number 3"},
                    { id:3, title: "Post name 4",body: "Body post number 4"},
                ],

                dialogVisible: false
            }
        },

        methods: {
            createPost(post){
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removePost(post){
                this.posts = this.posts.filter(el => el.id !== post.id);
            },
            showDilaog(){
                this.dialogVisible = true;
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app{
        padding: 20px;
    }
</style>