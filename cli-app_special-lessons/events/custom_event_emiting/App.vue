<template>
  <h2>{{ title }}</h2>

   <div v-if="showModal">
    <!-- Now, my custom event, "@close", which was used within my child component. is then defined here-->
      <Model :header="header" :binding="binding"  :dataBinding="dataBinding" :toggle="toggleModal" theme="Default" @close="toggleModal" />
   </div>
   <button @click="toggleModal"> Toggle modal </button>
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
      binding: [30, 'hello'],
      dataBinding: 'hello',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
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


