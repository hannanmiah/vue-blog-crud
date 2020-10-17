import {reactive,computed} from 'vue'
import axios from 'axios'
const state = reactive({
    posts: [],
    async loadData(){
       try{
        const res = await axios.get('http://localhost:8000/posts')
        state.posts = res.data
       } catch(e){
        console.log(e)
       }
    },
    async deletePost(id){
        try {
            const res = await axios.delete(`http://localhost:8000/posts/${id}`)
            this.loadData()
            console.log(res)
        }catch(e){
            console.log(e)
        }
    },

    totalPost: computed(() => {
        return state.posts.length
    })
})

export default state