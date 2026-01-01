<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post-item">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, onUpdated } from 'vue';
    import SinglePost from './SinglePost.vue';

    export default {
        name: 'PostList',
        components: { SinglePost },
        props: ['posts'],
        setup(props) {
            // life cycle hooks cycle hooks within the composition api
            onMounted(() => {
                console.log('component mounted')
            })
            onUnmounted(() => console.log('component unmounted'))
            onUpdated(() => console.log('component updated'))

            return {}
        }
    }
</script>
