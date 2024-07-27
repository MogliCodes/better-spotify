<template>
  <section class="flex flex-col gap-10">
    <p class="font-bold">{{ playlists.total}} playlists</p>
    <div class="w-2/3 flex flex-col gap-8">
      <div class="bg-neutral-900 rounded-xl overflow-hidden" v-for="playlist in playlists.items" :key="playlist.id">
        <div class="flex items-center gap-8">
          <figure class="w-40">
            <img class="grayscale w-auto" :src="playlist.images[0].url" alt="playlist.name" />
          </figure>
          <div class="py-10">
            <BaseHeadline size="lg" type="h3"  >{{ playlist.name }}</BaseHeadline>
            <p>{{ playlist.tracks.total }} tracks</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps<{
  playlists: any
}>()
</script>