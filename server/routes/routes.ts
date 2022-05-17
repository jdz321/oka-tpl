import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

import * as proxyRouts from './proxy.routes.ts'

const router = new Router()

router.get('/', ...proxyRouts.proxyStatic)

export { router }
