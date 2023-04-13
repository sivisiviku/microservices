import * as Router from 'koa-router'
import { test } from '../controller/index'

const router: Router = new Router()

router.get('/', test)

export default router