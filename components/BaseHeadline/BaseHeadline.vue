<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'xl',
  },
})

const textClasses = computed(() => {
  return {
    'text-6xl font-bold': props.size === 'xl',
    'text-xl font-bold': props.size === 'lg',
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
