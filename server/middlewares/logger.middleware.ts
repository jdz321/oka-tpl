import { Middleware } from 'https://deno.land/x/oak@v10.5.1/mod.ts'
   
const loggerMiddleware: Middleware = async (ctx, next) => {
  await next()
  const reqTime = ctx.response.headers.get("X-Response-Time")
  const reqId = ctx.response.headers.get("X-Response-Id")
  const status = ctx.response.status
  console.log(
    `${reqId} ${ctx.request.method} ${ctx.request.url} - ${reqTime} status: ${status}`,
  )
}

export { loggerMiddleware }
