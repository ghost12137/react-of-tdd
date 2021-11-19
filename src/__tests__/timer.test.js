import {timerGame} from '../utils/timer'

afterEach(() => { 
  jest.useRealTimers();
});

test('1秒后是否有函数被调用', () => { 

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');


  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

// runAllTimers
it('传入的callback是否被调用', () => { 
  jest.useFakeTimers();

  const callback = jest.fn(() => { 
    // console.log('test')
  });

  timerGame(callback);

  // 在这个时间点，定时器的回调不应该被执行
  expect(callback).not.toBeCalled();

  // 快进时间使得所有定时器回调被执行
  jest.runAllTimers();
  //现在回调函数应该被调用
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});