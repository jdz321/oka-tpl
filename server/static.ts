import { proxy } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const staticMiddleware = () => {
  return proxy('localhost:3000')
}

export { staticMiddleware }
