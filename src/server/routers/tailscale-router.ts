import { j, publicProcedure } from "../jstack"


interface TailscaleDevice {
    id: string
    name: string
    hostname: string
    lastSeen: string
    addresses: string[]
    authorized: boolean
    os: string
    clientVersion: string
    updateAvailable: boolean
}

interface TailscaleDevices {
    devices: TailscaleDevice[]
}

export const tailscaleRouter = j.router({
    devices: publicProcedure.query(async ({ c }) => {


        try {
            const response = await fetch('https://api.tailscale.com/api/v2/tailnet/2lay.github/devices?fields=default', {
                headers: {
                    Authorization: `Bearer ${process.env.TAILSCALE_API_KEY}`

                }
            })
            if (!response.ok) {
                throw new Error(`Tailscale API responded with status: ${response.status}`)
            }

            const data = await response.json() as TailscaleDevices



            const devices = data.devices.map((device) => {
                return {
                    "name": device.name,
                    "lastSeen": device.lastSeen,
                }
            })

            return c.superjson(devices);
        } catch (error) {
            console.error('Tailscale API error:', error)
            throw new Error('Failed to fetch Tailscale devices')
        }
    }),
})
