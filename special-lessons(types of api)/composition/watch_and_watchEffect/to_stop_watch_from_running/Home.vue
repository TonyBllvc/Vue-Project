<template>
  <div class="home">
    Home
    <input type="text" v-model="search" />
    <p>Search: {{ search }}</p>
    <p v-for="name in filteredNames" :key="name">{{ name }}</p>
    <button type="button" @click="handleStop">Stop watching</button>
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

      const stopWatch = watch(search, (newValue) => {
        console.log('Search value changed:', newValue);
      });

      const stopEffect = watchEffect(() => {
        console.log('Search value:', search.value);
      });

      const filteredNames = computed(() => {
        return names.value.filter(name => name.includes(search.value));
      });

      // Function to stop the watchers from running
      // This is useful for cleanup, e.g., when the component is unmounted
      // or when you want to stop watching for changes
      const handleStop = () => {
        stopWatch();
        stopEffect();
      };


      return {
        names,
        search,
        filteredNames,
        handleStop
      }
    },
  }
</script>
