<template>
    <div>
        <h3>Список постов</h3>
        <PostItem @remove = "$emit('remove', post)" v-for="post in posts" :post="post" :key="post.id"/>
    </div>
</template>   

<script>
import PostItem from './PostItem.vue';

export default {
    components:{
        PostItem
    },

    props:{
    posts:{
        type: Array,
        required: true,
    }
 }
}
</script>

<style>
</style>