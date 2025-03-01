<template>
  <h2>{{ title }}</h2>
  <p>Welcome.. </p>
   <div v-if="showModal">
      <Model  :theme="theme" @close="toggleModal"  @bgTheme="toggleTheme"> 
        <template v-slot:links>
          <a href="#">Sign up</a>
          <a href="#">More info</a>
        </template>
        <h2>Ninja Giveaway</h2>
        <p>Grab your ninja swag for half price</p>
      </Model>
   </div>
   
   <button @click="toggleModal"> Open modal </button>
</template>

<script>

import Model from './model/Model.vue'

export default {
  name: 'App',
  components: {
    Model
  },
  data() {
    return {
      title: 'My firts vue app',
      header: 'Sign up',
      text: 'Grab your ninja swag for half price',
      binding: [30, 'hello'],
      showModal: false,
      theme: 'Default'
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleTheme() {
      this.theme = this.theme == 'Default' ? 'Sale' : 'Default'
    }
  }

  
}

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

</style>


