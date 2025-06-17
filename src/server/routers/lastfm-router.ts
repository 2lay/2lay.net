import { j, publicProcedure } from "../jstack"

interface LastFmTrack {
  name: string
  artist: { '#text': string }
  album: { '#text': string }
  url: string
  image: Array<{ '#text': string, size: string }>
  date?: { '#text': string }
  '@attr'?: { nowplaying: string }
}

interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[]
  }
}

export const lastfmRouter = j.router({
  recent: publicProcedure.query(async ({ c }) => {
    if (!process.env.LASTFM_API_KEY) {
      throw new Error('LASTFM_API_KEY is not configured')
    }

    try {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=iwas15with100k&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
      )
      
      if (!response.ok) {
        throw new Error(`Last.fm API responded with status: ${response.status}`)
      }

      const data = await response.json() as LastFmResponse
      return c.superjson(data.recenttracks?.track?.[0] ?? null)
    } catch (error) {
      console.error('Last.fm API error:', error)
      throw new Error('Failed to fetch recent tracks')
    }
  }),
})
