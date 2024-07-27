<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error)
    console.log(error)
}
</script>

<template>
  <header class="bg-neutral-900 text-emerald-400 py-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="font-bold">
        better.spotify
      </NuxtLink>
      <div v-if="user" class="flex gap-3">
        <UButton @click="signOut">
          Logout
        </UButton>
        <figure v-if="user" class="rounded-full overflow-hidden h-10 w-10">
          <img :src="user.user_metadata.avatar_url">
        </figure>
      </div>
      <UButton v-else>
        Login
      </UButton>
    </div>
  </header>
</template>
