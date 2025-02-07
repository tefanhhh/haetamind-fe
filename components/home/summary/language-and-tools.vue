<template>
  <div class="language-and-tools bg-white pt-8 pb-4 px-8 rounded-xl">
    <h2 id="text-ts" class="font-bold text-2xl sm:text-3xl break-words mb-4">
      &nbsp;
    </h2>
    <UDivider class="mb-6" />
    <ul class="flex flex-wrap justify-between items-center gap-4">
      <li v-for="(item, i) in items" :key="i">
        <UTooltip :text="item.title">
          <NuxtImg
            format="webp"
            :src="item.icon"
            :alt="item.title"
            width="100"
            :height="item.height"
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
    height: 100,
  },
  {
    title: 'Typescript',
    icon: '/images/typescript_5968381_zcva7v.png',
    height: 100,
  },
  {
    title: 'Git',
    icon: '/images/git_rzhjdk.png',
    height: 42,
  },
  {
    title: 'Github',
    icon: '/images/icons8-github_c8fj56.svg',
    height: 100,
  },
  {
    title: 'Docker',
    icon: '/images/docker_kmb6dh.svg',
    height: 23,
  },
  {
    title: 'Cypress',
    icon: '/images/cypress_xtnwsi.svg',
    height: 40,
  },
  {
    title: 'Postman',
    icon: '/images/postman_1_ke4rz7.svg',
    height: 103,
  },
  {
    title: 'Swagger',
    icon: '/images/swagger_b3w1x0.svg',
    height: 100,
  },
  {
    title: 'NodeJS',
    icon: '/images/icons8-nodejs_jte4s2.svg',
    height: 100,
  },
  {
    title: 'Vue',
    icon: '/images/icons8-vue-js_yuwcdy.svg',
    height: 100,
  },
  {
    title: 'Vite',
    icon: '/images/vite_o6adud.svg',
    height: 98.5,
  },
  {
    title: 'Nuxt',
    icon: '/images/nuxt_sngsvu.svg',
    height: 25,
  },
  {
    title: 'Angular',
    icon: '/images/angular_qi3b0d.png',
    height: 31.5,
  },
  {
    title: 'ExpressJS',
    icon: '/images/icons8-express-js_dpyyrb.svg',
    height: 100,
  },
  {
    title: 'NestJS',
    icon: '/images/nestjs_u5o72f.svg',
    height: 96.5,
  },
  {
    title: 'GraphQL',
    icon: '/images/graphql_f6jsur.svg',
    height: 100,
  },
  {
    title: 'Apollo GraphQL',
    icon: '/images/apollo_ldbprn.svg',
    height: 100,
  },
  {
    title: 'MongoDB',
    icon: '/images/mogodb_yslwlp.svg',
    height: 25,
  },
  {
    title: 'PostgreSQL',
    icon: '/images/postgresql_nd87qp.png',
    height: 103,
  },
  {
    title: 'Redis',
    icon: '/images/icons8-redis_s6pwbq.svg',
    height: 100,
  },
  {
    title: 'SASS',
    icon: '/images/sass_oqnre9.svg',
    height: 75,
  },
  {
    title: 'Tailwind CSS',
    icon: '/images/icons8-tailwind-css_z5uszi.svg',
    height: 100,
  },
  {
    title: 'Vuetify',
    icon: '/images/vuetify_yet6fc.svg',
    height: 101,
  },
  {
    title: 'Nuxt UI',
    icon: '/images/icons8-nuxt-js_w7exc0.svg',
    height: 100,
  },
  {
    title: 'Angular Material',
    icon: '/images/icons8-angular_dg6ue0.svg',
    height: 100,
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
