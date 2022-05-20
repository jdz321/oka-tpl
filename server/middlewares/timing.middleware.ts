import { Middleware } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const timingMiddleware: Middleware = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set("X-Response-Time", `${ms}ms`)
}

export { timingMiddleware }
