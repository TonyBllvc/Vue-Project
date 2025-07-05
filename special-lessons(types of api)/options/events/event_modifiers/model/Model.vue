<template>
    <!-- Modifiers are just for adding specifics to an event handler object -->
     <!-- i.e '.self' -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <div class="button">
                <button @click="toggle">Close</button>
            </div>
            <h2>{{header}}</h2>
            <p>{{ binding[0] }}</p>
            <p>{{ dataBinding }}</p>
            <div class="texting" :class="{sale: theme === 'Sale', default: theme === 'Default'}">
                {{ theme }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['header', 'binding', 'dataBinding', 'theme', 'toggle'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style> 
    .modal{
        width: 400px;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        margin: 100px auto;
    }

    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }
    .modal h2{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal .texting{
        padding: 10px;
        text-align: center;
    }

    .modal .sale{
        background-color: crimson;
        color: white;
    }
    .modal .default{
        background-color: #03cfb4;
    }

    .modal .button{
        text-align: right;
    
    }
    .modal .button button{
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
    }
</style>