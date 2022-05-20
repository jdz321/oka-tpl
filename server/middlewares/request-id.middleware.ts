import { Middleware } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

/**
 * requestId middleware
 * attach requestId in request & response header 
 */
const requestIdMiddleware: Middleware = async (ctx, next) => {
  let requestId = ctx.request.headers.get("X-Response-Id")
  if (!requestId) {
    requestId = globalThis.crypto.randomUUID()
  }
  await next()
  ctx.response.headers.set("X-Response-Id", requestId)
}

export { requestIdMiddleware }
