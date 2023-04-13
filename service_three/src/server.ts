import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import router from './router/index'

const app: Koa = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3002, () => {
    console.log('Server running on port 3002')
})