<template>
    <div class="post">
        <div>
            <div>
                <strong>Имя поста:</strong>
                {{ post.title }}
            </div>
            
            <div>
                <strong>Текст поста: </strong>
                {{ post.body }}
            </div>
        </div>

        <div>
            <MyButton @click="$emit('remove', post)">Удалить</MyButton>
        </div>
    </div>
</template>   

<script>

export default{
    props:{
        post:{
            type: Object,
            required : true
        }
    }
}
</script>

<style scoped>
    .post{
        padding: 15px;
        border: 2px solid rebeccapurple;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>