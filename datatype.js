/** 不出错的数据类型检验 */
const dataType = {
  isNull: function(val) { return val === null },
  isUndefined: function(val) { return val === undefined },
  isNumber: function(val) { return Object.prototype.toString.call(val) == '[object Number]' },
  isString: function(val) { return Object.prototype.toString.call(val) == '[object String]' },
  isBoolean: function(val) { return Object.prototype.toString.call(val) == '[object Boolean]' },
  isSymbol: function(val) { return Object.prototype.toString.call(val) == '[object Symbol]' },
  isArray: function(val) { return Object.prototype.toString.call(val) == '[object Array]' },
  isFunction: function(val) { return Object.prototype.toString.call(val) == '[object Function]' },
  isObject: function(val) {
    return (Object.prototype.toString.call(val) == '[object Object]' ||
      // if it isn't a primitive value, then it is a common object
      (
        !dataType.isNumber(val) &&
        !dataType.isString(val) &&
        !dataType.isBoolean(val) &&
        !dataType.isArray(val) &&
        !dataType.isNull(val) &&
        !dataType.isFunction(val) &&
        !dataType.isUndefined(val) &&
        !dataType.isSymbol(val)
      )
    )
  },
  isEmptyArray:function(array){
    if (!dataType.isArray(array)) {
      return false;
    }
    return array.length > 0 ? false : true;
  },
  isEmptyObject:function(obj){
    if (!dataType.isObject(obj)) {
      return false;
    }
    for (let key in obj) {
      return false;
    }
    return true;
  }
}

export default dataType