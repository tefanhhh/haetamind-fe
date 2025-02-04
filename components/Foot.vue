<template>
  <footer class="bg-black">
    <div class="container mx-auto px-8 sm:px-0 py-8 text-white">
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div class="flex items-end gap-2">
          <Logo variant="soft" width="62" />
          <div>
            <h2 class="text-lg font-bold text-white">TEFAN HAETAMI</h2>
            <p class="text-white text-sm font-light mb-0">Jakarta, Indonesia</p>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold text-primary-400 mb-1">Contact Me</h2>
          <ul
            class="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-4"
          >
            <li v-for="(item, i) in contacts" :key="i">
              <a
                :href="item.value"
                class="text-sm flex items-center gap-2 text-white"
                target="_blank"
              >
                <UIcon :name="item.icon" class="h-4 w-4" />
                <span>{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const contacts = [
  {
    label: 'Email',
    icon: 'i-heroicons-envelope',
    value: 'mailto:tefanhaetami87@gmail.com',
  },
  {
    label: 'Whatsapp',
    icon: 'i-simple-icons-whatsapp',
    value: 'https://wa.me/+6281350659737',
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    value: 'https://www.linkedin.com/in/tefanhaetami',
  },
  {
    label: 'Github',
    icon: 'i-simple-icons-github',
    value: 'https://github.com/tefanhhh',
  },
]
</script>
