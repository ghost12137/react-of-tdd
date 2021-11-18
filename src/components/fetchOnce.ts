import axios from 'axios'

export interface MsgData {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const  fetchPosts = (props: any) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}