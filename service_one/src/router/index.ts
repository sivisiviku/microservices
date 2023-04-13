import * as Router from 'koa-router'
import { test } from '../controller/index'

const router: Router = new Router()

router.get('/:size', test)

export default router