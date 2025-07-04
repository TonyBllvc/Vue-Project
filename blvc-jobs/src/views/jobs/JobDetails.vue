<template>
    <div v-if="job">
        <h1>{{ job?.title }} </h1>
        <p>
            This job is {{ id }}
        </p>
        <p>
            {{ job?.details }}
        </p>
    </div>
    <div v-else>
        <p>
            Loading...
        </p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                // id: this?.$route?.params?.id // we no longer need this, as we are getting it from the props as id
                job: null
            }
        },
        mounted() {
            fetch(`http://localhost:8000/jobs/${this.id}`)
                .then(res =>
                    res.json()
                )
                .then(data =>
                    this.job = data
                    // console.log(data)
                )
                .catch(err => console.log(err?.message))
        }

    }
</script>

<style></style>