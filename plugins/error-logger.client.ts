export default defineNuxtPlugin((nuxtApp) => {
  const format = (context: string, error: unknown, info?: unknown) => ({
    context,
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    info,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    time: new Date().toISOString(),
  })

  nuxtApp.hook('vue:error', (error, _instance, info) => {
    console.error('[vue:error]', format('vue:error', error, info))
  })

  nuxtApp.vueApp.config.errorHandler = (error, _instance, info) => {
    console.error('[vue.config.errorHandler]', format('vue.config.errorHandler', error, info))
  }

  window.addEventListener('unhandledrejection', (event) => {
    console.error('[unhandledrejection]', format('unhandledrejection', event.reason))
  })

  window.addEventListener('error', (event) => {
    console.error('[window.error]', format('window.error', event.error ?? event.message))
  })
})