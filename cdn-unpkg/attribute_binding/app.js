const app = Vue.createApp({
    data() {
        // Data template
        return {
            url: 'https://www.netninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFav: true, img: '../assets/Screenshot (1).png', id: 1 },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: '../assets/Screenshot (11).png', isFav: false, id: 2 },
                { title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', img: '../assets/Screenshot (14).png', isFav: true, id: 3 }
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

