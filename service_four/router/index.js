const Router = require('koa-router')
const controller = require('../controller/index')

const router = new Router()

router.get('/', controller.test)

module.exports = router