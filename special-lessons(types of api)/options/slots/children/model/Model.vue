<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme = 'Sale'}">
            <!--
             'slot' element represent children to be display,..
             .. since modal was a parent component, it was able to display its children 
              -->
            <slot></slot>
            
        </div>

    </div>
</template>

<script>
export default {
    props: [ 'theme', 'toggle'],
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

    .sale{
        background-color: crimson;
        color: white;
    }
    .default{
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