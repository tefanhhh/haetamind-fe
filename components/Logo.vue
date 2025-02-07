<template>
  <NuxtLink to="/" class="cursor-pointer">
    <NuxtImg
      format="webp"
      :src="src[props.variant]"
      loading="lazy"
      :width="props.width"
      alt="Application Logo"
    />
  </NuxtLink>
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
  compact:
    'https://res.cloudinary.com/tefanhaetami/image/upload/v1733543111/Tefan_Logo_wt2qve.png',
  soft: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1733543886/Tefan_Logo_Soft_hcve2e.png',
}
</script>
