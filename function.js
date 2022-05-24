/** 函数节流 */
function throttle(fn, delay) {
  /** 有个需要频繁触发的函数fn，出于性能优化的角度，在规定时间delay内，只让函数触发的第一次生效，后面不生效 
   * 一个函数执行一次后，只有大于设定的执行周期后才会执行第二次
  */
  var lastTime = 0
  return function() {
    let nowTime = Date.now()
    if(nowTime - lastTime > delay) {
      fn.call(this)
      lastTime = nowTime
    }
  }
}
/** 防抖函数 */
function debounce(fn, delay) {
  /** 一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面不生效 */
  var timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(this)
    }, delay)
  }
}

export default {
  throttle,
  debounce
}