<template>
  <div class="container mx-auto px-4 sm:px-0">
    <HomeHero />
    <div class="mb-8"></div>
    <UTabs
      v-model="tab.value"
      :items="tab.items"
      :content="false"
      :ui="{
        list: {
          rounded: 'rounded-full',
          background: 'bg-primary-50',
          height: 'h-auto',
          tab: {
            active: 'text-white bg-primary',
            inactive: 'text-black',
            rounded: 'rounded-full',
            height: 'h-10',
          },
          marker: {
            rounded: 'rounded-full',
            background: 'bg-primary',
          },
        },
      }"
    />
    <div class="mb-8"></div>
    <HomeSummary v-if="tab.items[tab.value].value === 'summary'" />
    <HomeWorks v-else-if="tab.items[tab.value].value === 'works'" />
    <div class="mb-8"></div>
  </div>
</template>
<script setup lang="ts">
const tab = reactive({
  value: 0,
  items: [
    {
      label: 'Summary',
      value: 'summary',
    },
    {
      label: 'Works',
      value: 'works',
    },
  ],
})
</script>
