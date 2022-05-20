import { Context, RouterMiddleware } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

export const proxyStatic = [
  (async (ctx, next) => {
    console.log('router')
    await next()
  }) as RouterMiddleware<any>,
] as const
