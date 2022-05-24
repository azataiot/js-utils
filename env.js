/** 通用 */
const ENV = {
  dev: '开发环境',
  test: '测试环境',
  prod: '生产环境'
}
const environment = 'dev'
export default ENV[environment]


/**
 * 在vue-cli3的项目中，
 * npm run serve时会把process.env.NODE_ENV设置为‘development’；
 * npm run build 时会把process.env.NODE_ENV设置为‘production’；
 * npm run test 时会把process.env.NODE_ENV设置为‘test’；
 * "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test": "vue-cli-service build --mode test"
  },
 */
let baseUrl = ''
if(process.env.NODE_ENV == 'production') { /** 生产环境 */
  baseUrl = 'http://www.chunling.online/api/'
} else if(process.env.NODE_ENV == 'test') { // 测试环境
  baseUrl = 'http://localhost:80/api/'
} else { /** 开发环境 */
  baseUrl = 'https://www.easy-mock.com/mock/5d479d13078a16064d9514d9/api/'
}
export default baseUrl