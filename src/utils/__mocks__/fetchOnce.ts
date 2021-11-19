import {defaultData} from './sample-data'

export const  fetchPosts = (props: any) => {
  return Promise.resolve({
    status: 200,
    data: defaultData
  });
}