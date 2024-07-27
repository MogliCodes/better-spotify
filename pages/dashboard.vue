<script setup lang="ts">
import SpotifyPlaylists from '~/components/Spotify/SpotifyPlaylists.vue'

const user = useSupabaseUser()
const config = useRuntimeConfig()

const spotifyAccessToken = ref('')

async function requestAccessToken() {
  const response = await $fetch('/api/spotify/get-access-token', {
    method: 'POST',
  })
  // spotifyAccessToken.value = response.data.access_token
  spotifyAccessToken.value = response
}

await requestAccessToken()

const playlists = ref()

async function requestUserPlaylists() {
  const response = await $fetch('https://api.spotify.com/v1/users/moglialterego/playlists', {
    headers: {
      Authorization: `Bearer ${spotifyAccessToken.value.access_token}`,
    },
  })
  playlists.value = response
}

console.log('accesstoke', spotifyAccessToken.value)

watch(spotifyAccessToken, () => {
  if (spotifyAccessToken.value) {
    console.log('accesstoke', spotifyAccessToken.value.access_token)
    requestUserPlaylists()
  }
}, { immediate: true })
</script>

<template>
  <section class="py-10">
    <BaseContainer>
      <BaseHeadline type="h1" class="mb-2">
        Dashboard
      </BaseHeadline>
      <SpotifyPlaylists v-if="playlists" :playlists="playlists" />
      <pre v-if="config.public.debug" class="bg-emerald-900 text-emerald-50 rounded-xl p-5">
        {{ user.user_metadata }}
      </pre>
    </BaseContainer>
  </section>
</template>
