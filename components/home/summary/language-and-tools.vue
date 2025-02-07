<template>
  <div class="language-and-tools bg-white pt-8 pb-4 px-8 rounded-xl">
    <h2 id="text-ts" class="font-bold text-2xl sm:text-3xl break-words mb-4">
      &nbsp;
    </h2>
    <UDivider class="mb-6" />
    <ul
      class="columns-3 sm:columns-5 md:columns-6 lg:columns-8 xl:columns-11 gap-4"
    >
      <li v-for="(item, i) in items" :key="i" class="break-inside-avoid mb-4">
        <UTooltip :text="item.title">
          <NuxtImg
            format="webp"
            :src="item.icon"
            :alt="item.title"
            width="100"
            loading="lazy"
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
    icon: '/images/js_5968292_tzqcwd.png',
  },
  {
    title: 'Typescript',
    icon: '/images/typescript_5968381_zcva7v.png',
  },
  {
    title: 'Git',
    icon: '/images/git_rzhjdk.png',
  },
  {
    title: 'Github',
    icon: '/images/icons8-github_c8fj56.svg',
  },
  {
    title: 'Docker',
    icon: '/images/docker_kmb6dh.svg',
  },
  {
    title: 'Cypress',
    icon: '/images/cypress_xtnwsi.svg',
  },
  {
    title: 'Postman',
    icon: '/images/postman_1_ke4rz7.svg',
  },
  {
    title: 'Swagger',
    icon: '/images/swagger_b3w1x0.svg',
  },
  {
    title: 'NodeJS',
    icon: '/images/icons8-nodejs_jte4s2.svg',
  },
  {
    title: 'Vue',
    icon: '/images/icons8-vue-js_yuwcdy.svg',
  },
  {
    title: 'Vite',
    icon: '/images/vite_o6adud.svg',
  },
  {
    title: 'Nuxt',
    icon: '/images/nuxt_sngsvu.svg',
  },
  {
    title: 'Angular',
    icon: '/images/angular_qi3b0d.png',
  },
  {
    title: 'ExpressJS',
    icon: '/images/icons8-express-js_dpyyrb.svg',
  },
  {
    title: 'NestJS',
    icon: '/images/nestjs_u5o72f.svg',
  },
  {
    title: 'GraphQL',
    icon: '/images/graphql_f6jsur.svg',
  },
  {
    title: 'Apollo GraphQL',
    icon: '/images/apollo_ldbprn.svg',
  },
  {
    title: 'MongoDB',
    icon: '/images/mogodb_yslwlp.svg',
  },
  {
    title: 'PostgreSQL',
    icon: '/images/postgresql_nd87qp.png',
  },
  {
    title: 'Redis',
    icon: '/images/icons8-redis_s6pwbq.svg',
  },
  {
    title: 'SASS',
    icon: '/images/sass_oqnre9.svg',
  },
  {
    title: 'Tailwind CSS',
    icon: '/images/icons8-tailwind-css_z5uszi.svg',
  },
  {
    title: 'Vuetify',
    icon: '/images/vuetify_yet6fc.svg',
  },
  {
    title: 'Nuxt UI',
    icon: '/images/icons8-nuxt-js_w7exc0.svg',
  },
  {
    title: 'Angular Material',
    icon: '/images/icons8-angular_dg6ue0.svg',
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
  animateText('ts', 'Language and Tools')
})
</script>
<style lang="css" scoped>
.language-and-tools {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
