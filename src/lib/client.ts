import type { AppRouter } from "@/server"
import { createClient } from "jstack"

export const client = createClient<AppRouter>({
  baseUrl: `${getBaseUrl()}/api`,
})

function getBaseUrl() {
  // 👇 Use browser URL if client-side
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  // 👇 Use Vercel URL in production
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // 👇 Default to localhost
  return `http://localhost:3000`
}
