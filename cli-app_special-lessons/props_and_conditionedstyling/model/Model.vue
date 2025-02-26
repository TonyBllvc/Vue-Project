<template>
    <div class="backdrop" >
        <div class="modal">
            <h2>{{header}}</h2>
            <p>{{ binding[0] }}</p>
            <p>{{ dataBinding }}</p>
            <!-- 
            conditioning my styling based on the theme prop that was passed from the App.vue
            sale and default are classes that I have defined in the style tag below
            conditioned by theme prop
            -->
            <div class="texting" :class="{sale: theme === 'Sale', default: theme === 'Default'}">
                {{ theme }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    /* 
    In other to use a prop that was passed from another component..
    .. I have to define a props object, then define an array and specify the name of the prop
    */
    props: ['header', 'binding', 'dataBinding', 'theme']
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
</style>