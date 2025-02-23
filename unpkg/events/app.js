const app = Vue.createApp({
    // Data, functions,
    // template: '<h2>I am a template</h2>'
    // to output a dynamic value int=side our template, we have to use:
    // data function: Defining it the way you would within an object..
    // .. then return the content you wish to display, i.e. "title"
    data() {
        // Data template
        return {
            showBooks: true,
            title: "The final empire",
            author: "Black man",
            age: 25,
            x: 0,
            y: 0
        }
    },
    methods: {
        toogleBook() {
            this.showBooks = !this.showBooks
        },
        changeTitle(val) {
            if (val) {
                this.title = val
            } else {
                this.title = 'okay'
            }
        }
    }
})

app.mount('#app')

