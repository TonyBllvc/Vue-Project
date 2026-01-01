<template>
  <div class="home">
    Home
    <div v-if="error" class="error"> {{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
  import PostList from '@/components/PostList.vue';
  import getPosts from '@/composables/getPosts';
  import { ref, } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    components: { PostList },
    setup() {
      const { posts, error, load } = getPosts();
      
      load();
      
      return {
        posts,
        error,
      }
    },
  }
</script>

<style>
  .error{
    padding: 15px 0 ;
  }
</style>