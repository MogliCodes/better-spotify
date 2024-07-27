<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function signInWithOAuth() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'spotify',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error)
    console.log(error)
}
</script>

<template>
  <section class="py-40">
    <BaseContainer class="">
      <div class="sm:w-1/2 flex flex-col items-start gap-5">
        <BaseHeadline type="h1">
          better.spotify
        </BaseHeadline>
        <BaseText type="p">
          A better way to enjoy Spotify. More features. Features the world desperately needed. Discover your music like never before with our custom Spotify client. Enjoy advanced playlist creation, in-depth stats, and personalized music management. Upgrade your listening experience today! No ads, no interruptions. Just music. 🎵
        </BaseText>
        <UButton @click="signInWithOAuth">
          <UIcon class="scale-150" name="ph:spotify-logo" />Login with Spotify
        </UButton>
      </div>
      <pre>{{ user }}</pre>
    </BaseContainer>
  </section>
</template>
