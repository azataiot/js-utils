
/** 日期&时间 */
function formatDate(date, formatString) {
  /** @formatString 格式化日期 yyyy-MM-dd hh:mm:ss */
  let mydate = new Date(date)
  let dateObj = {
    y: mydate.getFullYear(),
    m: (mydate.getMonth() + 1 < 10)?'0'+(mydate.getMonth() + 1):mydate.getMonth() + 1,
    d: (mydate.getDate() < 10)?'0'+mydate.getDate():mydate.getDate(),
    h: (mydate.getHours() < 10)?'0'+mydate.getHours():mydate.getHours(),
    min: (mydate.getMinutes() < 10)?'0'+mydate.getMinutes():mydate.getMinutes(),
    s: (mydate.getSeconds() < 10)?'0'+mydate.getSeconds():mydate.getSeconds()
  }
  let res = formatString.replace(/yyyy/g, dateObj.y)
  res = res.replace(/MM/g, dateObj.m)
  res = res.replace(/dd/g, dateObj.d)
  res = res.replace(/hh/g, dateObj.h)
  res = res.replace(/mm/g, dateObj.min)
  res = res.replace(/ss/g, dateObj.s)
  return res
}
function formatDateToChineseDesc(date) {
  /** @return 语义化的时间描述：'n月前'/'n周前'/'n天前'/'n小时前'/'n分钟前'/'刚刚' */
  let mydate = Math.round(new Date(date).getTime()/1000)
  let min = 60, hour = min*60, day = hour * 24, month = day * 30, year = month * 12
  let diffVal = Math.round(new Date().getTime()/1000) - mydate
  let diffMonth = diffVal/month, 
      diffWeek = diffVal/(7*day),
      diffDay = diffVal/day,
      diffHour = diffVal/hour,
      diffMinute = diffVal/min
  if(diffMonth > 3) {
    return `${mydate.getFullYear()}-${mydate.getMonth() + 1}-${mydate.getDate()}`
  }
  if(diffMonth > 1) {
    return `${parseInt(diffMonth)}月前`
  }
  if(diffWeek > 1) {
    return `${parseInt(diffWeek)}周前`
  }
  if(diffDay > 1) {
    return `${parseInt(diffDay)}天前`
  }
  if(diffHour > 1) {
    return `${parseInt(diffHour)}小时前`
  }
  if(diffMinute > 1) {
    return `${parseInt(diffMinute)}分钟前`
  }
  return '刚刚'
}

export default {
  formatDate,
  formatDateToChineseDesc
}