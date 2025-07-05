<template>
  <h2>{{ title }}</h2>

  <!-- Using the Model component and passing props -->
  <Model header="Sign up" :binding="[30, 'hello']" :dataBinding="dataBinding" theme="Sale" />
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
      dataBinding: 'hello'
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


