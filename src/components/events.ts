import fetch from './fetch'
import sum from './sum';

export default {
  async getPostsList() {
    return fetch.fetchPostsList((data: any) => {
      console.log('fetchPostsList be called!')
      // console.log('data: ', data)
    })
  }
}