<template>
  <ul v-for="post in posts" :key="post.id">
    <li>
      <div class="title">{{post.title}}</div>
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
</style>
