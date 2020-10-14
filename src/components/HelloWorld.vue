<template>
  <ul v-for="dat in data" :key="dat.id">
    <li>{{dat.author}} - {{dat.title}}</li>
  </ul>
</template>

<script>
import {ref,reactive,onMounted} from 'vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  setup(){
    const data = ref([])
    const error = ref(null)
    const loadData = async () => {
      try{
        const res = await axios.get('http://localhost:8000/posts')
        data.value = res.data
      }catch(e){
        error.value = e
      }
      
    }

    onMounted(()=> {
      loadData()
      console.log('app mounted!')
    })
    

    return {data,loadData}
  }
}
</script>
