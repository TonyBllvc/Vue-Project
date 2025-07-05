<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post-item">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import SinglePost from './SinglePost.vue';

    export default {
        name: 'PostList',
        components: { SinglePost },
        props: ['posts'],
        setup(props) {


            return {}
        }
    }
</script>
