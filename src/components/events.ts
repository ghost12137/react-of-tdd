import fetch from './fetch'
import test from './fetch';

export default {
  async getPostsList() {
    return fetch.fetchPostsList((data: any) => {
      console.log('fetchPostsList be called!')
      // console.log('data: ', data)
    })
  }
}