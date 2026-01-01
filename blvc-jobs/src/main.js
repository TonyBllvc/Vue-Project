import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import router from router folder

// This program mainly converts the concepts of using Vue 2 to Vue 3.
// It initializes a Vue 3 application, sets up routing, and mounts the app to the DOM.
// It uses the `createApp` function from Vue 3 to create the app instance, applies the router, and mounts it to an HTML element with the ID 'app'.
// The `App.vue` file serves as the root component of the application, and the router is used to manage navigation between different views.
// It shows you how to make requests to the backend(using json server for dummy data) and handle responses in a Vue 3 application.
// Makes major use of Option's API, which is a common pattern in Vue 2, but still applicable in Vue 3.
// NOTE: This code does not include composition API features, which are also available in Vue 3 for more advanced state management and reactivity.
createApp(App).use(router).mount('#app')
