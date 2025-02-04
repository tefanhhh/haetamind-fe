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
          <ULink v-for="(link, i) in links" :key="i" :to="link.url" class="text-xs sm:text-base font-inter font-medium hover:text-primary">
            {{ link.name }}
          </ULink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const links = ref([{ name: 'Work History', url: '/works' }])
</script>
