<script setup lang="ts">
const user = useSupabaseUser()
const config = useRuntimeConfig()
</script>

<template>
  <section class="py-10">
    <BaseContainer>
      <BaseHeadline type="h1">
        Dashboard
      </BaseHeadline>
      <pre v-if="config.public.debug" class="bg-emerald-900 text-emerald-50 rounded-xl p-5">
        {{ user.user_metadata }}
      </pre>
    </BaseContainer>
  </section>
</template>
