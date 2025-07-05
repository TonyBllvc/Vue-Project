<template>
  <div class="home">
    Home
    <!-- Attach 'play' with a ref to the paragraph element, and use it to handle access to the element -->
    <p ref="play"> My name is {{ name }} and my age is {{ age }}</p>
    <button type="button" v-on:click="handleClick"> Click me</button>
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

      let name = 'Blvc';
      let age = 18;

      const handleClick = () => {
        console.log('Button clicked');
        console.log(play.value);
        play.value.classList.add('active'); // to add a class to the element
        play.value.innerText = 'Hello Vue 3'; // to change the text content of the element
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
