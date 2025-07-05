<template>
    <div class="backdrop" >
        <div class="modal">
            <h2>Model Title</h2>
            <p>Model Content</p>
        </div>

    </div>
</template>
<!-- scoped applies a sort of consistent styling to the particular component -->
<style scoped> 
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
    h2{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    /* or instead of using scoped */
    /* .model h2{
        color: #03cfb4;
        border: none;
        padding: 0;
    } */
</style>