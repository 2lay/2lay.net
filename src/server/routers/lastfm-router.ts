
import { j, publicProcedure } from "../jstack"

export const lastfmRouter = j.router({
  recent: publicProcedure.query(async ({ c }) => {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=iwas15with100k&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`)
    const data = await response.json() as any
    return c.superjson(data.recenttracks.track[0] ?? null)
  }),
})
