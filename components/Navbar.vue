<template>
  <nav
    class="bg-transparent backdrop-blur-sm sticky top-0 left-0 z-50 py-6"
  >
    <div class="container mx-auto px-4 sm:px-0">
      <div class="flex items-center justify-between">
        <div class="flex-shrink-0 inline-flex items-center gap-2">
          <Logo variant="compact" width="40" />
          <h1 class="font-bold text-xl">
            <span class="text-primary">HAETA</span>MIND
          </h1>
        </div>
        <div class="flex items-center gap-4">
          <a v-for="(link, i) in links" :key="i" :href="link.value" target="_blank" class="text-xs sm:text-base font-inter font-medium hover:text-primary">
            <UIcon :name="link.icon" class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const links = [
  {
    label: 'Github',
    icon: 'i-simple-icons-github',
    value: 'https://github.com/tefanhhh',
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    value: 'https://www.linkedin.com/in/tefanhaetami',
  },
]
</script>
