<template>
  <div class="home">
    Home
    <input type="text" v-model="search" />
    <p>Search: {{ search }}</p>
    <p v-for="name in filteredNames" :key="name">{{ name }}</p>
  </div>
</template>

<script>
  import { computed, ref, watch, watchEffect } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    setup() {

      const search = ref('');
      const names = ref(['blvc', 'blog', 'vue3', 'composition-api']);

      // Watch: The watch function allows you to perform side effects in response to changes in reactive data.
      // takes in two arguments: 
      // 1. the reactive data to watch 
      // 2. a callback function that runs when the data changes.
      watch(search, (newValue) => {
        console.log('Search value changed:', newValue);
      });

      // WatchEffect: The watchEffect function automatically tracks reactive dependencies and runs the provided function whenever any of those dependencies change.
      // It is useful for side effects that depend on reactive data without needing to specify the dependencies
      // NOTE: Runs when the component is mounted and whenever the reactive data changes.
      // NOTE: watchEffect does not take a second argument like watch. Instead you take the value and put witjhin the function.
      watchEffect(() => {
        console.log('Search value:', search.value);
      });

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
