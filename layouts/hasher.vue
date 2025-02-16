<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4 sm:px-0">
      <UButton
        type="button"
        variant="outline"
        label="Go Back"
        icon="i-heroicons-arrow-left"
        :ui="{
          rounded: 'rounded-full',
          padding: {
            sm: 'px-4 py-1.5',
          },
        }"
        @click="router.go(-1)"
      />
      <div class="max-w-[512px] mx-auto">
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
          @change="onTabChange"
        />
      </div>
      <div class="mb-8"></div>
      <slot />
      <div class="mb-32"></div>
    </div>
    <Foot />
  </div>
</template>
<script setup lang="ts">
const indexStore = useIndexStore()
const { setPageTransitionName } = indexStore

const tab = reactive({
  value: 0,
  prevValue: 0,
  items: [
    {
      label: 'Bcrypt',
      value: '/tools/hasher',
    },
    {
      label: 'Scrypt',
      value: '/tools/hasher/scrypt',
    },
    {
      label: 'Argon2',
      value: '/tools/hasher/argon2',
    },
  ],
})

const router = useRouter()
const path = router.currentRoute.value.path

const onTabChange = useDebounce((val: number) => {
  if (val > tab.prevValue) {
    setPageTransitionName('slide-left')
  } else {
    setPageTransitionName('slide-right')
  }
  router.replace({
    path: tab.items[val].value,
  })
  tab.prevValue = val
}, 300)

if (path) {
  const index = tab.items.findIndex((item) => item.value === path)
  if (index !== -1) {
    tab.value = index
    tab.prevValue = index
  }
}
</script>
