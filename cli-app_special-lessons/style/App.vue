<template>
  <h2>{{ title }}</h2>
  <Model />
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
      title: 'My firts vue app'
    }
  }
  
}

</script>

<style >
/*
 Can't add global here, cause ..
 .. the "#app" selector is not present in this file..
 .. but in the html file.
 */
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


