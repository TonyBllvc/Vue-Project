<template>
  <div class="home">
    Home
    <PostList :posts="posts" />
  </div>
</template>

<script>
  import PostList from '@/components/PostList.vue';
  import { ref, } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    components: { PostList },
    setup() {

      const posts = ref([
        { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', id: 1 },
        { title: 'Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', id: 2 },
      ]);



      return {
        posts
      }
    },
  }
</script>
