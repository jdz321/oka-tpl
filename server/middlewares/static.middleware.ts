import { proxy } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const staticMiddleware = () => {
  return proxy('http://localhost:3000', {
    // match
  })
}

export { staticMiddleware }
