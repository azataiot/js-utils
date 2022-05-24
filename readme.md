# 常用函数的封装

## common.js
通用函数的封装，包括系统输出简化，正则检验，日期格式化，货币格式化，BOM操作，DOM操作，函数节流防抖等
* `log` console.log的简化函数
* `error` console.error的简化函数
* `table` console.table的简化函数
* `isPhoneNumber` 手机号码校验
* `isChineseName` 中文姓名校验
* `isEnglishName` 英文姓名校验
* `isBankCardNumber` 银行卡号校验
* `isCarNumber` 车牌号校验
* `isEmail` 邮箱校验
* `isIDCardNumber` 身份证号码校验
* `isPassportNumber` 护照校验
* `isTelePhoneNumber` 座机号校验
* `isQQNumber` QQ号校验
* `isWechatNumber` 微信号校验
* `isZipCode` 邮政编码校验
* `isIpv4` ipv4地址校验
* `formatDate` 日期格式化
* `formatDateToChineseDesc` 日期转化为语义化的时间描述：'n月前'/'n周前'/'n天前'/'n小时前'/'n分钟前'/'刚刚'
* `formatCurrency` 货币格式化
* `resizeRootNodeFontSize` 更改根节点的字体大小，适用于移动端的rem适配
* `getQueryString` 获取当前页面的请求参数
* `isScrollBottom` 检测滚动条是否滚动到底部
* `isWhatBrowser` 判断打开网页的是什么浏览器，返回结果 'wechat' 'ios' 'android' 'pc'
* `throttle` 函数节流
* `debounce` 函数防抖


## env.js
环境配置，包括常用的环境配置、vue项目环境配置
* 生产环境 prod / production
* 测试环境 test / test
* 开发环境 dev / development

## http.js
axios的promise封装

## sort.js
排序算法：冒泡、快速、插入、希尔、选择、归并、堆排序等

## wxhttp.js
小程序wx.request的promise封装