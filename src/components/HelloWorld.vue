<template>
  <ul v-for="post in posts" :key="post.id">
    <li>{{post.author}} - {{post.title}}</li>
  </ul>
</template>

<script>
import {onMounted,toRefs} from 'vue'
import state from '../composables/postComposer'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  setup(){
    onMounted(()=> {
      state.loadData()
      console.log('app mounted!')
    })

    return {...toRefs(state)}
  }
}
</script>
