<template>
    <div v-if="error" class="error"> 
        {{ error }}
    </div>
    <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <div>
            <strong>Tags:</strong>
            <span v-for="tag in post.tags" :key="tag">
                #{{ tag }}
            </span>
        </div>
    </div>
    <div v-else>
        loading...
    </div>
</template>

<script>
    import getPost from '@/composables/getPost';

    export default {
        name: 'Details',
        props: ['id'],
        setup (props) {

            const { post, error, load } = getPost(props.id)
            
            load();

            return { post, error }
        }
    }
</script>

<style scoped>
    .post{
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p{
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    
    .pre{
        white-space: pre-wrap;
    }

</style>