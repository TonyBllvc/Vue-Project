const app = Vue.createApp({
    // ** watchers **
    /*
        A watcher is a method that watches a data property with the same name.
        
        A watcher runs every time the data property value changes.
        
        Use a watcher if a certain data property value requires an action.
    */

    data() {
        return {
            rangeVal: 70
        }
    },
    watch: {
        rangeVal(val) {
            if (val > 20 && val < 60) {
                if (val < 40) {
                    this.rangeVal = 20;
                }
                else {
                    this.rangeVal = 60;
                }
            }
        }
    }

})

app.mount('#app')

