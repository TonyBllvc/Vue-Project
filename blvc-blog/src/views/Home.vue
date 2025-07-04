<template>
  <div class="home">
    Home
    <input type="text" v-model="search" />
    <p>Search: {{ search }}</p>
    <p v-for="name in filteredNames" :key="name">{{ name }}</p>
  </div>
</template>

<script>
  import { computed, ref } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    setup() {

      const search = ref('');
      const names = ref(['blvc', 'blog', 'vue3', 'composition-api']);

      const filteredNames = computed(() => {
        return names.value.filter(name => name.includes(search.value));
      });


      return {
        names,
        search,
        filteredNames,
      }
    },
  }
</script>
