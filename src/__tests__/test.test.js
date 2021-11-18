// 特殊类型
test('null', () => {
  const n = null
  expect(n).toBeNull() // 是否是null
  expect(n).toBeDefined() // 是否被定义
  expect(n).not.toBeUndefined()// 是否未定义
  expect(n).not.toBeTruthy() // 是否为真
  expect(n).toBeFalsy() // 是否为假
})


// 数字
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeGreaterThanOrEqual(4)

  // expect(value).toBeLessThan(5)
  // expect(value).toBeLessThan(4)
  // expect(value).toBeLessThanOrEqual(4)
  // expect(value).toBeLessThanOrEqual(4.5)

  expect(value).toBe(4.0)
  expect(value).toEqual(4.0)
})

// 浮点
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3);           //这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3) // 这句可以运行
});

// 字符串
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// 可迭代对象
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

// 错误
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// 测试异步代码
const getData = (type) => {
  if (type === 1) {
    return Promise.resolve({ test: 1 })
  } else {
    return Promise.reject('error')
  }
}
const fetchData = async (callback) => {
  const data = await getData(1)
  callback(data)
}

// 回调函数测试异步
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toEqual({ test: 1 });
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// promise测试异步
test('the data is obj of promise', () => {
  return getData(1).then(data => {
    expect(data).toEqual({ test: 1 })
  })
})

// promise测试异步失败
test('the data is obj of error', () => {
  expect.assertions(1)
  return getData().catch(e => expect(e).toMatch('error'))
})

// 使用async/await测试异步
test('the data is obj of await success', async () => {
  const data = await getData(1)
  expect(data).toEqual({ test: 1 })
})

test('the data is obj of await error', async () => {
  try {
    const data = await getData()
  } catch (e) {
    expect(e).toMatch('error')
  }
})

// mock，在测试代码之间起连接作用
// 确定该模块是否被调用
// 创建mock函数
test('测试test.fn()调用', () => {
  const mockFn = jest.fn()
  let result = mockFn(1, 2, 3)

  // 断言mockFn执行后返回undefined
  expect(result).toBeUndefined()
  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
  // 断言mockFn被调用一次
  expect(mockFn).toBeCalledTimes(1)
  expect(mockFn.mock.calls.length).toBe(1)
  // 断言mockFn传入的参数为1，2，3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)

  // 调用时函数第一个参数是1
  expect(mockFn.mock.calls[0][0]).toBe(1)
})

test('测试jest.fn()返回固定值', () => {
  let mockFn = jest.fn().mockReturnValue('default')
  // 断言mockFn执行后返回值为default
  expect(mockFn()).toBe('default')
})

test('测试jest.fn()内部实现方法', () => {
  let mockFn = jest.fn((num1, num2) => num1 * num2)
  // 断言mockFn执行后返回100
  expect(mockFn(10, 10)).toBe(100)
})

test('测试jest.fn()返回Promise', async () => {
  let mockFn = jest.fn().mockResolvedValue({test: 1})
  let result = await mockFn()
  // 断言mockFn通过await关键字执行后返回值为对象
  expect(result).toEqual({test: 1})
  // 断言mockFn调用后返回的是Promise对象
  expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]")
})


import fetch from '../utils/fetch'

test('fetchPostsList中的回调函数应该能够被调用 ',async () => {
  expect.assertions(1)
  let mockFn = jest.fn()
  await fetch.fetchPostsList(mockFn)

  // 断言mockFn被调用
  expect(mockFn).toBeCalled()
})





