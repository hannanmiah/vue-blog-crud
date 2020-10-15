<template>
<h1>Vue 3 simple blog app</h1>
  <div class="box">
    <Suspense>
    <template #default>
      <HelloWorld/>
    </template>
    <template #fallback>
      loading...
    </template>
  </Suspense>
  <new-post/>
  </div>
</template>

<script>
import {onErrorCaptured,ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NewPost from './components/NewPost.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NewPost
  },
  setup(){
    const error = ref(null)

    onErrorCaptured(e => {
      error.value = e
      console.log(e)
      return true
    })

    return {error}
  }
}
</script>

<style>
    .box {
      border: 2px solid green;
      border-radius: 10px;
      padding: 10px;
      margin: 5px auto;
    }

    ul {
      list-style-type: none;
    }

    button {
      border: 2px solid palegreen;
      background: green;
      padding: 5px;
      border-radius: 5px;
      color: white;
    }
</style>
