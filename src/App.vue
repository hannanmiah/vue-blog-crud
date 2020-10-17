<template>
<h1 class="heading">Vue 3 simple blog app</h1>
    <Suspense>
    <template #default>
      <Post/>
    </template>
    <template #fallback>
      loading...
    </template>
  </Suspense>
  <new-post/>
</template>

<script>
import {onErrorCaptured,ref} from 'vue'
import Post from './components/Post.vue'
import NewPost from './components/NewPost.vue'

export default {
  name: 'App',
  components: {
    Post,
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

    ul li{
      border: 1px solid rgb(247, 238, 238);
      padding: 10px;
    }

    button {
      display: block;
      border: 2px solid palegreen;
      background: green;
      padding: 5px;
      border-radius: 5px;
      color: white;
      margin: 5px auto;
      cursor: pointer;
    }

    .heading {
      text-align: center;
    }
</style>
