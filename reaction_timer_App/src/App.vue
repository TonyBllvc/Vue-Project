<template>
  <h1> Reaction timer</h1>
  <!-- @click or v-on:click: Lets me access my click event in my javascript -->
  <!-- v-bind:disabled or :disbaled: lets use disable the button if criteriates meet -->
  <button @click="start" v-bind:disabled="isPlaying">Play</button>


  <!-- <div v-show="showShadow" class="box-touch">
  </div> -->
  <!-- v-bind:delay or :delay: used as a props in this case -->
  <Block v-if="isPlaying" v-bind:delay="delay" @end="endGame" />

  <Results v-show="showResults" v-bind:result="score" />
  <!-- <p v-show="showResults">
    Reaction time: {{ score }} ms
  </p> -->
</template>

<script>
  import Block from './components/Block.vue'
  import Results from './components/Results.vue'

  export default {

    name: 'App',
    components: {
      Block,
      Results

    },
    data() {
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false,
        // showShadow: true
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
        this.showResults = false
        // console.log(this.delay)
      },
      endGame(reactionTime) {
        this.score = reactionTime
        this.isPlaying = false
        this.showResults = true
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
  button{
    background-color: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled]{
    opacity: 0.2;
    cursor: not-allowed;
  }
  .box-touch {
    width: 400px;
    border-radius: 20px;
    border: #c4c4c4 solid 1px;
    background-color: #f6f5f5;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;

  }
</style>