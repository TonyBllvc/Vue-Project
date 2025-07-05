<template>
  <h2>{{ title }}</h2>

   <div v-if="showModal">
    <!-- 
    Model is instead used as a parnet wrapper component, ..
    .. to wrap other contents, which could also be components -->
      <Model :toggle="toggleModal" theme="Default" @close="toggleModal" >
        
        <!-- 
        Note: 
          if we do not add a default content, the slot will display whatever is shown in the parent component i.e 'Model' in this case
        -->
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


