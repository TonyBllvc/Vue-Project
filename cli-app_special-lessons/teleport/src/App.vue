<template>
  <h2>{{ title }}</h2>
  <p>Welcome.. </p>
  <!-- 
  Teleportation in vue is a way to render a component in a different place in the DOM.
  so to do that, we use the teleport tag, i.e: <teleport></teleport>, like so and we give it a 'to' attribute then the class/id from th div within the "idex.html" file
  -->
   <teleport to=".modals" v-if="showModal">
      <Model  :theme="theme" @close="toggleModal"  @bgTheme="toggleTheme"> 
        <template v-slot:links>
          <a href="#">Sign up</a>
          <a href="#">More info</a>
        </template>
        <h2>Ninja Giveaway</h2>
        <p>Grab your ninja swag for half price</p>
      </Model>
   </teleport>
   
   
   <div v-if="showModalTwo">
      <Model  @close="toggleModalTwo"  @bgTheme="toggleTheme" :showModalTwo="showModalTwo ? 'hide' : 'show'"> 
        <h2>Sign up to newsletter</h2>
        <p>For updates and promo codes</p>
      </Model>
   </div>

   <button @click="toggleModal"> Open modal </button>
   <button @click="toggleModalTwo"> Open modal Two </button>
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
      showModal: false,
      showModalTwo: false,
      theme: 'Default'
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
    toggleTheme() {
      this.theme = this.theme == 'Default' ? 'Sale' : 'Default'
    }
  }

  
}

</script>

<style >
#app, .modals {
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


