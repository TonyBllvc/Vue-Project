<template>
    <form>
        <!-- v-model: creates a two-way data binding -->
        <div>
            <label>Email: </label>
            <input type="text" v-model="email" required />
            <label>Password: </label>
            <input type="password" v-model="password" required />
        </div>
        
    </form>
</template>

<script>

    export default {
        name: 'SignupForm',
        // components: [

        // ],
        data() {
            return {
                email: '',
                password: ''
            }
        },


    }

</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    div {
        background-color: white;
        margin: 0 20px;
    }

    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input {
        display: block;
        padding: 5px 6px;
        width: 100%;
        box-shadow: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    input:focus {
        border: none;
        border-style: hidden;
        border-bottom: #555 2px solid;
    }

</style>