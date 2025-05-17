<template>
    <div>
        <h1>Job details </h1>
        <p>
            This job id is {{ id }}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        // data() {
        //     return {
        //         id: this?.$route?.params?.id // we no longer need this, as we are getting it from the props as id
        //     }
        // }
    }
</script>

<style ></style>