<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'Sale', default: theme === 'Default' }">
            <!--
             'slot' element represent children to be display,.. 
             .. since modal was a parent component, it was able to display its children 
              -->
            <slot>Default content</slot>
            <div class="actions" v-if="showModalTwo == 'hide' ? false : true ">
                <button @click="changeTheme">Change Theme</button>
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme', 'showModalTwo'],
    methods: {
        closeModal() {
            this.$emit('close')
        },
        changeTheme() {
            this.$emit('bgTheme')
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    margin: 100px auto;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.modal h2 {
    color: #03cfb4;
    border: none;
    padding: 0;
}

.modal p {
    font-style: normal;
}

.modal .texting {
    padding: 10px;
    text-align: center;
}

.modal.sale {
    background-color: crimson;
    color: white;
}

.modal.sale h1 {
    color: #fff;
}

.modal.default {
    background-color: #eaedf2;
}

.modal .button {
    text-align: right;
}

.modal .button button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
}

.modal.sale .actions {
    text-align: center;
    margin-top: 30px 0 10px 0;
}

.modal.sale .actions a {
    margin: 10px;
    color: #fff;
    font-weight: 500;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    padding: 8px;
}

.modal.default .actions a {
    margin: 10px;
    color: #777;
    font-weight: 500;
    border: 1px solid #777;
    border-radius: 4px;
    text-decoration: none;
    padding: 8px;
}
</style>