import { createApp } from 'vue'
import App from './App.vue'
import "./assets/global.css"

// This is generally an introdution to a Vue 3 application setup.
// It imports the necessary modules, including the main App component and global styles.
// The `createApp` function is used to create a new Vue application instance, which is then mounted to the DOM element with the ID 'app'.
// shows us how to manipulate: data, dom manipulation, handle events and render lists in Vue 3.
// Shows us how to use options methods, computed properties, and lifecycle hooks in Vue 3.
// NOTE: This code does not include routing, which is a common feature in Vue applications. 
createApp(App).mount('#app')
