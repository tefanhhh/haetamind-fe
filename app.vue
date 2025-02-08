<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage :transition="pageTransition" />
    </NuxtLayout>
    <ClientOnly>
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MBZPWWKX"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
    </ClientOnly>
  </div>
</template>
<script lang="ts" setup>
const indexStore = useIndexStore()
const { pageTransition } = storeToRefs(indexStore)
</script>
<style lang="css">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
