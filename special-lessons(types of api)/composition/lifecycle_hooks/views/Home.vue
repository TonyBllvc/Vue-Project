<template>
  <div class="home">
    Home
    <PostList v-if="showPosts" :posts="posts" />
    <!-- These two buttons are used to simulate the usage of lifecycle hooks within the composition api -->
    <!-- You would find the setup of these hook with the "PostList" component -->

    <!-- This button is to simulate the component "onunmouted" lifecycle hook -->
    <button type="button" @click="showPosts = !showPosts"> Toggle posts</button>
    
    <!-- This button is to simulate the component "onupdated" lifecycle hook -->
    <button type="button" @click="posts.pop()"> Delete post</button>
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

      const showPosts = ref(true)


      return {
        posts,
        showPosts
      }
    },
  }
</script>
