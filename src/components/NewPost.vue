<template>
    <form @submit.prevent="">
        <input v-model="form.title" type="text" name="" id="" placeholder="Title">
        <input v-model="form.author" type="text" name="" id="" placeholder="Author">
        <input v-model.number="form.id" type="text" name="" id="" placeholder="id">
        <button @click="addPost" type="submit">Add Post</button>
    </form>
</template>

<script>
import {reactive,ref} from 'vue'
import axios from 'axios'
export default {
    name: 'NewPost',
    setup(){
        const form = ref({
            author: '',
            title: '',
            id: null
        })

        function addPost(){
            if(form.value.author && form.value.title && form.value.id){
                const res = axios.post('http://localhost:8000/posts',form.value)
                console.log(res)
                form.value = {}
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
        border: 2px solid #ddd;
        padding: 5px;
        margin: 5px auto;
        max-width: 500px;
    }

</style>