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
  import { ref, } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    components: { PostList },
    setup() {

      const posts = ref([]);
      const error = ref(null)

      const load = async () => {
        try {
          let res = await fetch("http://localhost:8000/posts")

          if (!res?.ok) {
            throw Error('something went wrong')
          }

          const data = await res.json()

          posts.value = data
        } catch (err) {

          error.value = err?.message
          // console.log(err.value)
        }
      }

      load()

      const showPosts = ref(true)


      return {
        posts,
        error,
        showPosts
      }
    },
  }
</script>

<style>
  .error{
    padding: 15px 0 ;
  }
</style>