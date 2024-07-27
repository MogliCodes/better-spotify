<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
  },
})

const textClasses = computed(() => {
  return {
    'text-lg': props.size === 'md',
    'text-base': props.size === 'sm',
  }
})
</script>

<template>
  <component :is="props.type" :class="textClasses">
    <slot />
  </component>
</template>
