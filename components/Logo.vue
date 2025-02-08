<template>
  <NuxtImg
    format="webp"
    :src="src[props.variant]"
    loading="lazy"
    :width="props.width"
    :height="props.width"
    alt="Application Logo"
  />
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number | string
    variant?: 'compact' | 'soft'
  }>(),
  {
    width: 194,
    variant: 'compact',
  },
)

const src = {
  compact: '/images/Tefan_Logo_wt2qve.png',
  soft: '/images/Tefan_Logo_Soft_hcve2e.png',
}
</script>
