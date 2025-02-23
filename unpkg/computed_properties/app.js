const app = Vue.createApp({
    // ** computed properties **
    /*
    A computer property is a way to define a data property inside orur component that depends on other data properties.
    It is a way to define a property that is based on other properties.
    */
    // computed properties are cached and only re-evaluated when the dependencies change
    /*
    Computed properties are like data properties, except they depend on other properties.

    Computed properties are written like methods, but they do not accept any input arguments.

    Computed properties are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example.

    Computed properties are used when outputting something that depends on something else. For example, if we have a list of books, and we want to output the number of books, we can use a computed property to count the number of books.
    */
    data() {
        // Data template
        return {
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFav: true, img: '../../../assets/Screenshot (1).png', id: 1 },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: '../../../assets/Screenshot (11).png', isFav: false, id: 2 },
                { title: 'Good Omens', author: 'Terry Pratchett & Neil Gaiman', img: '../../../assets/Screenshot (14).png', isFav: true, id: 3 }
            ]
        }
    },
    methods: {
        toogleBook() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav

        },
    },
    computed: {
        // computed properties
        // computed properties are cached and only re-evaluated when the dependencies change
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')

