const app = Vue.createApp({
    data() {
        // Data template
        return {
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFav: true, id: 1 },
                { title: 'The Way of Kings', author: 'Brandon Sanderson',  isFav: false, id: 2 },
                { title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', isFav: true, id: 3 }
            ]
        }
    },
    methods: {
        toogleBook() {
            this.showBooks = !this.showBooks
        },

        handleEvent(e, data) {
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')

