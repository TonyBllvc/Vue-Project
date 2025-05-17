<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>

  <button type="button" v-on:click="redirect"> Redirect </button>
  <button type="button" @click="back"> Go back</button>
  <button type="button" v-on:click="forward">Go forward </button>
  <router-view /> <!-- Route dynamincally rendered here -->
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: "home" }) // to redirect to the selected(indicated) page
      },
      back() {
        // route: used to get the current route
        // router: used to do something or run an action on the route system
        this?.$router.go(-1) // to go back to the page before click i.e a step back
      },
      forward() {
        this.$router.go(1) // to go forward to the page after click i.e a step forward
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
  }

  nav a.router-link-exact-active {
    color: white;
    background-color: crimson;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    transition: all;
    transition-duration: 1200ms;
  }

  button:hover {
    color: #f4f4f4;
    font-weight: bold;
    background-color: #2c3e50;
  }

</style>
