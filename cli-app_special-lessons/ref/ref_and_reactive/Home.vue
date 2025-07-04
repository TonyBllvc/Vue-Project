<template>
  <div class="home">
    Home
    <h2>Refs</h2>
    <p>{{ message.title }} - {{ message.year }}</p>
    <button @click="handleUpdate">Update Message</button>
    <h2>Reactive</h2>
    <p>{{ reactiveMessage.title }} - {{ reactiveMessage.year }}</p>
    <button @click="handleSecondUpdate">Update Message</button>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue';

  // @ is an alias to /src

  export default {
    name: 'Home',
    setup() {

      // NOTE: Reactive can not handle primitive values like strings or numbers directly. i.e., const message = reactive('Hello, Vue 3!');
      // Use ref for primitive values, and reactive for objects or arrays.

      // NOTE: Refs also work better when using external compositions functions, because they retain their reactivity across external functions (multiple components).
      const message = ref({ title: 'Hello, Vue 3!', year: 2022 });
      // Using ref to create a reactive object
      // You can also use reactive() for more complex objects
      const reactiveMessage = reactive({ title: 'Hello, Vue 2!', year: 2021 });

      const handleUpdate = () => {
        // Updating properties of a ref object using '.value'
        // This is necessary because 'message' is a ref
        // and we need to access its value property to update it
        message.value.title = 'Updated Title';
        message.value.year = 2023;
      };

      // If you use 'reactiveMessage', you can update it directly
      // without needing to use '.value' since it's a reactive object
      const handleSecondUpdate = () => {
        // Directly updating properties of a reactive object, without using '.value'
        reactiveMessage.title = 'Updated Reactive Title';
        reactiveMessage.year = 2023;
      };
      return {
        message,
        reactiveMessage,
        // Expose the handleUpdate function to the template
        handleUpdate,
        handleSecondUpdate
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
