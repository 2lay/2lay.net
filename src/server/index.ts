import { j } from "./jstack"
import { lastfmRouter } from "./routers/lastfm-router"
import { tailscaleRouter } from "./routers/tailscale-router"

/**
 * This is your base API.
 * Here, you can handle errors, not-found responses, cors and more.
 *
 * @see https://jstack.app/docs/backend/app-router
 */
const api = j
  .router()
  .basePath("/api")
  .use(j.defaults.cors)
  .onError(j.defaults.errorHandler)

/**
 * This is the main router for your server.
 * All routers in /server/routers should be added here manually.
 */
const appRouter = j.mergeRouters(api, {
  lastfm: lastfmRouter,
  tailscale: tailscaleRouter,
})

export type AppRouter = typeof appRouter

export default appRouter
