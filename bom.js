/** 常用BOM操作 */
function getQueryString() { /** 获取当前页面的请求参数 */
  let qs = (location.search.length > 0 ? location.search.substring(1) : "");
  let args = {};
  let items = qs.length ? qs.split("&") : [];
  let item = null;
  let name = null;
  let value = null;
  for (let i = 0, len = items.length; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}
function isScrollBottom() { /** 检测滚动条是否滚动到底部 */
  if (document.body.scrollHeight - document.body.scrollTop <= window.screen.availHeight) {
    return true;
  }
  return false;
}
function isWhatBrowser() { /** 判断打开网页的是什么浏览器，移动端还是pc端 */
  /** @return 'wechat' 'ios' 'android' 'pc' */
  const u = navigator.userAgent
  const browser = {
    ie: u.indexOf('Trident') > -1, // IE内核
    opera: u.indexOf('Presto') > -1, // Presto内核
    chrome: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    firefox: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    safari: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
  }
  if(browser.mobile) { // 移动端浏览器
    if(browser.wechat) return 'wechat'  // 微信内打开
    if(browser.ios) return 'ios'  // ios浏览器打开
    if(browser.android) return 'android'  // 安卓浏览器打开
  } 
  return 'pc'  // pc端浏览器
}

export default {
  getQueryString,
  isScrollBottom,
  isWhatBrowser
}