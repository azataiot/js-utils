/** console输出简化函数 */
function log() {
  console.log.apply(this, arguments)
}
function error() {
  console.error.apply(this, arguments)
}
function table() {
  console.table.apply(this, arguments)
}

export default {
  log,
  error,
  table
}