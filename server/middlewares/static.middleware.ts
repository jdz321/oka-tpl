import { proxy, Middleware } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const staticMiddleware = (): Middleware => {
  const ENV = Deno.env.get('ENV')
  const isDev = ENV === 'dev' || ENV === 'development'
  if (isDev) {
    return proxy('http://localhost:3000', {
      // match
    })
  }
  return async (context) => {
    await context.send({
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    })
  }
}

export { staticMiddleware }
