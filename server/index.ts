import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts'
import { router } from './routes/routes.ts'
import * as middlewares from './middlewares/middlewares.ts'

const app = new Application()

app.use(middlewares.loggerMiddleware)
app.use(middlewares.errorMiddleware)
app.use(middlewares.timingMiddleware)

app.use(middlewares.requestIdMiddleware)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(middlewares.staticMiddleware())

await app.listen({ port: 8000 })
