<template>
  <div class="home">
    Home
    <p> My name is {{ name }} and my age is {{ age }}</p>
    <button type="button" v-on:click="handleClick"> Click me</button>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    setup() {
      // This is where you can set up your component logic
      // For example, you can import and use composables or reactive variables
      let name = 'Blvc';
      let age = 18;

      const handleClick = () => {
        console.log('Button clicked');
      };

      return {
        name,
        age,
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
