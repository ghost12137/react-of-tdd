export const timerGame = (callback: Function) => {
  // console.log('ready go')
  setTimeout(() => {
    // console.log('time up stop')
    callback && callback();
  }, 1000);
}