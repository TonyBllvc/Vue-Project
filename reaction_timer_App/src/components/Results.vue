<template>
    <p>
        Reaction time: {{ result }} ms
    </p>
    <p class="rank">
        {{ rank }}
    </p>

</template>

<script>
    export default {
        name: 'Result',
        props: ['result'],
        data() {
            return {
                rank: null
            }
        },
        mounted() {
            if (this.result < 250) {
                this.rank = 'Ninja Fingers'
            } else if (this.result < 400) {
                this.rank = 'Rapid Reflexes'
            } else {
                this.rank = 'Snail pace..'
            }
        }
        // components: ['']
    }

</script>

<style>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }

</style>