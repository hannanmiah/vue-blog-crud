<template>
    <form @submit.prevent="">
        <input v-model="form.title" type="text" name="" id="" placeholder="Title">
        <input v-model="form.author" type="text" name="" id="" placeholder="Author">
        <button @click="addPost" type="submit">Add Post</button>
    </form>
</template>

<script>
import {reactive,ref} from 'vue'
import axios from 'axios'
import state from '../composables/postComposer'
export default {
    name: 'NewPost',
    setup(){
        const form = ref({
            author: '',
            title: '',
            id: Math.floor(Math.random()*100)
        })
        function addPost(){
            if(form.value.author && form.value.title){
                const res = axios.post('http://localhost:8000/posts',form.value)
                form.value = {}
                state.loadData()
            } else{
                alert('please, fill all the fields!')
            }
        }

        return {addPost,form}
    }
}
</script>

<style>
    input {
        display: block;
        width: 100%;
        border: 1px solid #ddd;
        padding: 5px;
        margin: 5px auto;
    }

</style>