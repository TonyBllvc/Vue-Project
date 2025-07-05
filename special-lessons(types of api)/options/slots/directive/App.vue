<template>
  <h2>{{ title }}</h2>

   <div v-if="showModal">
    <!-- 
    Model is instead used as a parnet wrapper component, ..
    .. to wrap other contents, which could also be components -->
      <Model :toggle="toggleModal" theme="Default" @close="toggleModal" >
        <!-- 
        Now, for the "slot" directive, it is used to pass in content i.e link, subtemplates, etc.
        .. to the child component
         I can define a slot name, which would be used in the child component
         So i will use "v-slot" directive to define the slot name, and then pass in the content name
        -->
        <template v-slot:links>
          <a href="#">Sign up</a>
          <a href="#">More info</a>
        </template>
        <h2>{{header}}</h2>
        <p>{{ binding[0] }}</p>
        <div class="texting" :class="{sale: theme === 'Sale', default: theme === 'Default'}">
            {{ theme }}
        </div>  

      </Model>
   </div>
   
   <button @click.alt="toggleModal"> Open modal(hold alt) </button>
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


