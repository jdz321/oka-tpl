import {
  isHttpError,
  Status,
  Middleware,
} from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const errorMiddleware: Middleware = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    let message = err.message
    const status = err.status || err.statusCode || Status.InternalServerError
    const ENV = Deno.env.get('ENV')
    const isDev = ENV === 'dev' || ENV === 'development'

    /**
     * considering all unhandled errors as internal server error,
     * do not want to share internal server errors to 
     * end user in non "development" mode
     */
    if (!isHttpError(err)) {
      message = isDev
        ? message
        : 'Internal Server Error'
    }

    if (isDev) {
      console.log(err)
    }

    ctx.response.status = status
    ctx.response.body = { status, message }
  }
}

export { errorMiddleware }