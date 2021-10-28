import axios from 'axios'

export default {
  async fetchPostsList(callback: any) {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      // console.log("data: ", res.data)
      return callback(res.data);
    })
  }
}