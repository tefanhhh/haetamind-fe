<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
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
