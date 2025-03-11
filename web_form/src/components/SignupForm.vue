<template>
    <form>
        <!-- v-model: creates a two-way data binding -->
        <div>
            <label>Email: </label>
            <input type="text" v-model="email" required />
            <label>Password: </label>
            <input type="password" v-model="password" required />

            <label>Role: </label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>

            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label> Accept terms and conditions</label>
            </div>
        </div>
<!-- 
        <div>
            <input type="checkbox" value="Shaun" v-model="names">
            <label> Shaun </label>
        </div>

        <div>
            <input type="checkbox" value="Black" v-model="names">
            <label> Black </label>
        </div>

        <div>
            <input type="checkbox" value="Tony" v-model="names">
            <label> Tony </label>
        </div> -->
    </form>
</template>

<script>

    export default {
        name: 'SignupForm',
        // components: {}
        data() {
            return {
                email: '',
                password: '',
                role: this.role || "",
                terms: false,
                // names: []
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

    input,
    select {
        display: block;
        padding: 5px 6px;
        width: 100%;
        box-shadow: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    input:focus,
    select:focus {
        border: none;
        outline: none;
        border-bottom: 2px solid #ddd;
    }

    input[type='checkbox'] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

</style>
