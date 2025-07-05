<template>
  <h2>{{ title }}</h2>
  <input type="text" ref="name"> 
  <!-- ref="name" is a reference to the input element -->
  <button @click="handleClick">Change title</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'My firts vue app'
    }
  },
  methods: {
    handleClick() {
          //   $refs is a reference to the input element, using the ref attribute
          // as such, the 'this' keyword is used to access the $refs property
          // the 'name' property is used to access the input element
    
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    // this.$refs.name.addId('name')
      console.log(this.$refs.name)
      // this.title = this.$refs.name.value
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
  margin-top: 60px;
}
h2{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>


