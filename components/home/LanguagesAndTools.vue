<template>
  <div class="language-and-tools bg-white pt-8 pb-4 px-8 rounded-xl">
    <h1 id="text-ts" class="font-bold text-2xl sm:text-3xl break-words mb-4">&nbsp;</h1>
    <UDivider class="mb-6" />
    <ul class="columns-3 sm:columns-5 md:columns-6 lg:columns-8 xl:columns-11 gap-4">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="break-inside-avoid mb-4"
      >
        <UTooltip :text="item.title">
          <NuxtImg
            :src="item.icon"
            :alt="item.title"
            width="100"
            class="cursor-pointer"
          />
        </UTooltip>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const items = [
  {
    title: 'Javascript (ES6+)',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679461/js_5968292_tzqcwd.png',
  },
  {
    title: 'Typescript',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679634/typescript_5968381_zcva7v.png',
  },
  {
    title: 'Git',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679456/git_rzhjdk.png',
  },
  {
    title: 'Github',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679896/icons8-github_c8fj56.svg',
  },
  {
    title: 'Docker',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679455/docker_kmb6dh.svg',
  },
  {
    title: 'Cypress',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679455/cypress_xtnwsi.svg',
  },
  {
    title: 'Postman',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679454/postman_1_ke4rz7.svg',
  },
  {
    title: 'Swagger',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679454/swagger_b3w1x0.svg',
  },
  {
    title: 'NodeJS',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738681349/icons8-nodejs_jte4s2.svg',
  },
  {
    title: 'Vue',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679732/icons8-vue-js_yuwcdy.svg',
  },
  {
    title: 'Vite',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679460/vite_o6adud.svg',
  },
  {
    title: 'Nuxt',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679461/nuxt_sngsvu.svg',
  },
  {
    title: 'Angular',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679545/angular_qi3b0d.png',
  },
  {
    title: 'ExpressJS',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679459/icons8-express-js_dpyyrb.svg',
  },
  {
    title: 'NestJS',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679459/nestjs_u5o72f.svg',
  },
  {
    title: 'GraphQL',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679458/graphql_f6jsur.svg',
  },
  {
    title: 'Apollo GraphQL',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679457/apollo_ldbprn.svg',
  },
  {
    title: 'MongoDB',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679456/mogodb_yslwlp.svg',
  },
  {
    title: 'PostgreSQL',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679457/postgresql_nd87qp.png',
  },
  {
    title: 'Redis',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679842/icons8-redis_s6pwbq.svg',
  },
  {
    title: 'SASS',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679454/sass_oqnre9.svg',
  },
  {
    title: 'Tailwind CSS',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738681473/icons8-tailwind-css_z5uszi.svg',
  },
  {
    title: 'Vuetify',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738679454/vuetify_yet6fc.svg',
  },
  {
    title: 'Nuxt UI',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738681731/icons8-nuxt-js_w7exc0.svg',
  },
  {
    title: 'Angular Material',
    icon: 'https://res.cloudinary.com/tefanhaetami/image/upload/v1738681627/icons8-angular_dg6ue0.svg',
  },
]

function animateText(id: string, value: string) {
  const container = document.getElementById(`text-${id}`)
  container!.innerHTML = ''
  const text = value.toUpperCase()
  const letters = text.split('')
  letters.forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter
    span.classList.add('opacity-0')
    container!.appendChild(span)
  })

  ScrollTrigger.create({
    trigger: container,
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () =>
      gsap.to(container!.children, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        ease: 'none',
      }),
    toggleActions: 'play none none reverse',
    once: true,
  })
}

onMounted(() => {
  animateText('ts', 'Languages and Tools')
})
</script>
<style lang="css" scoped>
.language-and-tools {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
