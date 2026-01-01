<template>
    <div class="post">
        <!-- <router-link :to="`/posts/${post.id}`">
            <h3>{{ post?.title }}</h3>
        </router-link> -->
        <!-- Or  {and this is for easy maintenance sakes}-->
        <router-link :to="{ name: 'details', params: { id: post.id } }">
            <h3>{{ post?.title }}</h3>
        </router-link>
       
        <p> {{ snippet }} </p>
        <span v-for="tag in post.tags" :key="tag">
           #{{ tag }}
        </span>
    </div>
</template>

<script>
    import { computed } from 'vue';

    export default {
        name: 'SinglePost',
        props: ['post'],
        setup(props) {

            const snippet = computed(() => {
                return props?.post?.body?.substring(0, 100) + "..."
            })

            return { snippet }
        }
    }
</script>
