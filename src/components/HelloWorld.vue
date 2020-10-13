<template>
  <h1>{{ msg }}</h1>
  <ul v-for="dat in data" :key="dat.id">
    <li>{{dat.author}} - {{dat.title}}</li>
  </ul>
</template>

<script>
import {ref,reactive,onMounted} from 'vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const data = ref([])
    const loadData = async () => {
      const res = await axios.get('http://localhost:8000/posts')
      data.value = res.data
    }

    onMounted(()=> {
      loadData()
    })

    return {data,loadData}
  }
}
</script>
