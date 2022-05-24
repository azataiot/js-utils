function resizeRootNodeFontSize() {
  /** 更改根节点的字体大小，适用于移动端的rem适配 */
  const html = document.getElementsByTagName('html')[0]
  const getScale = function() {
    let width = html.clientWidth,
        scale = Number(width/750).toFixed(4)  // 320:0.427  768:1.024
        lastScale = (scale>=1.024)?1.024:(scale<=0.427?0.427:scale)
    return lastScale
  }
  const changePage = function() {
    let lastScale = getScale()
    if(html.clientWidth <= 768) {
      html.setAttribute('style','font-size:'+(lastScale*100).toFixed(3)+'px');
    } else {
      html.setAttribute('style','')
    }
  }
  changePage()
  const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  if(!document.addEventListener)return 
  window.addEventListener(resizeEvent, changePage, false)
  window.addEventListener('DOMContentLoaded', changePage, false)
}

export default resizeRootNodeFontSize