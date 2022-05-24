/** 正则检验 */
function isPhoneNumber(str) { // 手机号
  /** 中国大陆手机号 [0086]11位 */
  let reg = /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/
  /** 中国香港手机号 [00852]8位 （8位开头5/6/9手机号，2/3座机号）*/
  let reg1 = /^(00852)?(5|6|9)\d{7}$/
  return reg.test(str) || reg1.test(str)
}
function isChineseName(str) { // 中文名
  /** 中文姓名 */
  return /^([\u4e00-\u9fa5·]{2,16})$/.test(str)
}
function isEnglishName(str) { // 英文名
  /** 英文姓名 */
  return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/.test(str)
}
function isBankCardNumber(str) { // 银行卡号
  /** 银行卡号16位或19位 */
  return /^([1-9]{1})(\d{15}|\d{18})$/.test(str)
}
function isCarNumber(str) { // 车牌号
  /** 新能源车牌号 */
  let reg = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/
  /** 非新能源车牌号 */
  let reg1 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return reg.test(str) || reg1.test(str)
}
function isEmail(str) { // 邮箱
  /** 是否是邮箱 */
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str)
}
function isIDCardNumber(str) { // 身份证号码
  /** 一代身份证号15位数字 */
  let reg = /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/
  /** 二代身份证号18位数字，最后一位可能为X */
  let reg1 = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/
  return reg.test(str) || reg1.test(str)
}
function isPassportNumber(str) { // 护照号码
  /** 护照（包含港澳） */
  return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/.test(str)
}
function isTelePhoneNumber(str) { // 座机号码
  /** 国内座机号码 注意：英文telephone为座机，cellphone或mobile phone方为手机 */
  return /\d{3}-\d{8}|\d{4}-\d{7}/.test(str)
}
function isQQNumber(str) { // QQ号
  /** 是否是QQ号码 */
  return /^[1-9][0-9]{4,10}$/.test(str)
}
function isWechatNumber(str) { // 微信号
  /** 是否是微信账号 */
  return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(str)
}
function isZipCode(str) { // 邮政编码
  /** 中国邮政编码 */
  return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(str)
}
function isIpv4(str) {
  /** 是否是ipv4地址 */
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str)
}

export default {
  isPhoneNumber,
  isChineseName,
  isEnglishName,
  isBankCardNumber,
  isCarNumber,
  isEmail,
  isIDCardNumber,
  isPassportNumber,
  isTelePhoneNumber,
  isQQNumber,
  isWechatNumber,
  isZipCode,
  isIpv4
}