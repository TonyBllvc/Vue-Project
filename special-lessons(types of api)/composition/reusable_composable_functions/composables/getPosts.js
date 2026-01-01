import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)

    const load = async () => {

        try {
            let res = await fetch("http://localhost:8000/posts")

            if (!res?.ok) {
                throw Error('something went wrong')
            }

            const data = await res.json()

            posts.value = data
        } catch (err) {

            error.value = err?.message
            // console.log(err.value)
        } finally {
            console.log('fetch attempt finished')
        }
    }

    return { posts, error, load }
}

export default getPosts;
