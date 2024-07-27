import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.post('/get-access-token', defineEventHandler(async () => {
    const spotifyAccessTokenUrl = 'https://accounts.spotify.com/api/token'
    const config = useRuntimeConfig()
    const { spotify } = config
    const { clientId, clientSecret } = spotify
    console.log(config)

    const url = `${spotifyAccessTokenUrl}?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    try {
        const response = await $fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return response
    } catch (e) {
        console.error(e)
        return 'error'
    }

}))

export default useBase('/api/spotify', router.handler)