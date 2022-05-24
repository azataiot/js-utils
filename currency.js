
/** 货币 */
function formatCurrency(price) {
  /** @price 数字或字符串或数组，数组则返回价格区间 */
  if(Object.prototype.toString.call(price) == '[object String]') {
    price = Number(price)
  }
  if(Object.prototype.toString.call(price) == '[object Number]') {
    return '￥' + price.toFixed(2) * 100 / 100
  }
  if(Object.prototype.toString.call(price) == '[object Array]') {
    if(price.length == 0) return
    if(price.length == 1) return '￥' + Number(price).toFixed(2) *100/100
    let min = Number(price[0]), max = min
    for(let i=1;i<price.length;i++) {
      if(min > Number(price[i])) min = Number(price[i])
      if(max < Number(price[i])) max = Number(price[i])
    }
    if(min == max) return '￥' + min.toFixed(2) *100/100
    return '￥' + min.toFixed(2) *100/100 + '~' + max.toFixed(2) *100/100
  }
}

export default {
  formatCurrency
}