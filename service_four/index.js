const Koa = require('koa')
const router = require('./router/index')

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3003, function() {
    console.log('Server running on port 3003')
})