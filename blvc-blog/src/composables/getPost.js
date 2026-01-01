import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null)

    const load = async () => {

        try {
            let res = await fetch(`http://localhost:8000/posts/${id}`)

            if (!res?.ok) {
                throw Error('something went wrong')
            }

            const data = await res.json()

            post.value = data
        } catch (err) {

            error.value = err?.message
            // console.log(err.value)
        } finally {
            console.log('fetch attempt finished')
        }
    }

    return { post, error, load }
}

export default getPost;
