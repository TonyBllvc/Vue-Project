<template>
  <h1> Reaction timer</h1>
  <!-- v-bind:disabled: lets use disable the button if criteriates meet -->
  <button @click="start" v-bind:disabled="isPlaying">Play</button>

  <Block v-if="isPlaying" v-bind:delay="delay" />
</template>

<script>
  import Block from './components/Block.vue'

  export default {

    name: 'App',
    components: {
      Block

    },
    data() {
      return {
        isPlaying: false,
        delay: null,
      }
    },
    methods: {
      start() {
        this.delay = 2000 + Math.random() * 5000 // gets use a random time between 200ms and 5000ms
        /*
        The code you provided sets a delay time for some operation. Let's break it down:
  
          1. Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
          2. Math.random() * 5000 scales this random number to a range between 0 and 5000 milliseconds.
          3. Adding 2000 ensures that the minimum delay is 2000 milliseconds.
          So, the total delay will be a random time between 2000 milliseconds (2 seconds) and 7000 milliseconds (7 seconds).
        */
        this.isPlaying = true
        console.log(this.delay)
      }
    }

  }
</script>

<style>

  #app,
  .modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }
</style>