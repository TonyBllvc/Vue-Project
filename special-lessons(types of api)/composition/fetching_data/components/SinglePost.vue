<template>
    <div class="post">
        <h3>{{ post?.title }}</h3>
        <p> {{ snippet }} </p>
    </div>
</template>

<script>
    import { computed } from 'vue';

    export default {
        name: 'SinglePost',
        props: ['post'],
        setup(props) {

            const snippet = computed(() => {
                return props?.post?.body?.substring(0, 100) + "..."
            })

            return { snippet }
        }
    }
</script>
