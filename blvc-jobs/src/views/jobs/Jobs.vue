<template>
    <h1> Jobs </h1>
    <div v-for="job in jobs" :key="'job.id'" class="job">
        <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
            <h2>{{ job?.title }}</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [
                    { title: 'Software Developer', id: 1, details: 'lorem' },
                    { title: 'UI/UX Developer', id: 2, details: 'lorem' },
                    { title: 'Frontend Developer', id: 3, details: 'lorem' },
                ]
            }
        }
    }
</script>

<style>
    .job h2 {
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 640px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background-color: #ddd;
    }
    .job a{
        text-decoration: none;
    }

</style>