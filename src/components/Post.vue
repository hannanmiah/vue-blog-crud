<template>
  <ul v-for="post in posts" :key="post.id">
    <li>
      <div class="title">{{post.title}} <button @click="deletePost(post.id)" class="badge danger">Delete</button></div>
      <div class="meta">{{post.author}}</div>
    </li>
  </ul>
</template>

<script>
import {onMounted,toRefs} from 'vue'
import state from '../composables/postComposer'
import axios from 'axios'
export default {
  name: 'Post',
  setup(){
    onMounted(()=> {
      state.loadData()
      console.log('app mounted!')
    })

    return {...toRefs(state)}
  }
}
</script>
<style scoped>
  .title {
    display: block;
    font-size: 1.5rem;
  }

  .meta {
    display: block;
    font-size: 1rem;
  }

  .badge {
    display: inline-block;
    color: white;
    padding: 2px;
    border-radius: 5px;
    font-size: 1rem;
  }

  .success {
    background: green;
    border: 1px solid rgb(1, 66, 1);
  }

  .danger {
    background: red;
    border: 1px solid rgb(136, 5, 5);
  }
</style>
