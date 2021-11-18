import fetch from '../utils/fetch'
// jest.mock
import events from '../utils/events'

// mock api
jest.mock('../components/fetch.ts')

test('mock 整个fetch.ts模块', async () => {
  expect.assertions(2)
  await events.getPostsList()

  expect(fetch.fetchPostsList).toHaveBeenCalled()
  expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1)
})

// jest.spyOn
// test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async () => {
//   expect.assertions(2)
//   const spyFn = jest.spyOn(fetch, 'fetchPostsList')
//   await events.getPostsList()

//   expect(fetch.fetchPostsList).toHaveBeenCalled()
//   expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1)
// })
