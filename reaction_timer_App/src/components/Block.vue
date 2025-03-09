<template>
    <div class="block" v-if="showBlock" v-on:click="stopTimer">
        click me
    </div>
</template>

<script>
    export default {
        props: ['delay'],
        data() {
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0
            }
        },
        // when component has mounted DOM
        mounted() {
            // console.log('component mounted')
            setTimeout(() => {
                this.showBlock = true
                this.starTimer()
                // console.log(this.delay)
            }, this.delay)
        },
        methods: {
            starTimer() {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer() {
                clearInterval(this.timer)
                // (function props, data sent(this will be a parameter within the "end" function) )
                this.$emit('end', this.reactionTime)
                console.log(this.reactionTime)
            }
        }
        // beforeUpdate() {
        //   console.log('component before update')  
        // },
        // // used when data is updated
        // updated() {
        //     console.log('component updated')
        // },
        // // used when component has been unmounted from DOM
        // unmounted() {
        //     console.log('component unmounted')
        // }, 
        
    }
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background-color: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }

</style>