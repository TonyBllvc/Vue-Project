<template>
  <div class="home">
    Home
    <p> My name is {{ name }} and my age is {{ age }}</p>
    <button type="button" v-on:click="handleClick"> Click me</button>
    <button type="button" v-on:click="age++"> Increment</button>
    <input type="text" v-model="name">
    <input type="number" v-model="age">
  </div>
</template>

<script>
  import { ref } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    setup() {

      // This is where you can set up your component logic
      // For example, you can import and use composables or reactive variables

      // Now dealing with refs within the compositiion API(setup)
      // refs are majorly imported during useage
      // And they are used to create reactive variables
      const play = ref(null); // Create a ref to hold the DOM element

      // let name = 'Blvc'; // These are not reactive, which means, when you try to change them, it will not be reflected in the DOM
      // let age = 18;

      // To make them reactive, you can use the ref() function from Vue
      const name = ref('Blvc'); // Create a reactive variable for name
      const age = ref(18); // Create a reactive variable for age

      const handleClick = () => {
        name.value = 'Blvc Blog'; // to change the name value
        age.value += 20; // to change the age value
      };

      return {
        name,
        age,
        play,
        handleClick
      }
    },
    // data() {
    //   return {
    //     // You can also define reactive data properties here
    //     // This is an alternative to using the setup function
    //   }
    // },
  }
</script>
