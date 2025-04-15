<template>
  <div class="language-and-tools bg-white pt-8 pb-4 px-8 rounded-xl">
    <h2 id="text-ts" class="font-bold text-2xl sm:text-3xl break-words mb-4">
      Language and Tools
    </h2>
    <UDivider class="mb-6" />
    <ul class="flex flex-wrap justify-center items-center gap-4">
      <li v-for="(item, i) in items" :key="i">
        <UTooltip :text="item.title">
          <UIcon :name="item.icon" class="h-24 w-24" :class="[item.color]" />
        </UTooltip>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const items = [
  {
    title: 'Javascript (ES6+)',
    icon: 'i-simple-icons-javascript',
    color: 'text-yellow-400',
  },
  {
    title: 'Typescript',
    icon: 'i-simple-icons-typescript',
    color: 'text-blue-500',
  },
  {
    title: 'Git',
    icon: 'i-simple-icons-git',
    color: 'text-red-500',
  },
  {
    title: 'Github',
    icon: 'i-simple-icons-github',
    color: 'text-black',
  },
  {
    title: 'Docker',
    icon: 'i-simple-icons-docker',
    color: 'text-blue-400',
  },
  {
    title: 'Postman',
    icon: 'i-simple-icons-postman',
    color: 'text-orange-500',
  },
  {
    title: 'Swagger',
    icon: 'i-simple-icons-swagger',
    color: 'text-green-700',
  },
  {
    title: 'NodeJS',
    icon: 'i-simple-icons-nodedotjs',
    color: 'text-green-600',
  },
  {
    title: 'Vite',
    icon: 'i-simple-icons-vite',
    color: 'text-fuchsia-500',
  },
  {
    title: 'React',
    icon: 'i-simple-icons-react',
    color: 'text-blue-400',
  },
  {
    title: 'Next JS',
    icon: 'i-simple-icons-nextdotjs',
    color: 'text-black',
  },
  {
    title: 'Redux',
    icon: 'i-simple-icons-redux',
    color: 'text-pink-600',
  },
  {
    title: 'Vue',
    icon: 'i-simple-icons-vuedotjs',
    color: 'text-green-400',
  },
  {
    title: 'Nuxt JS',
    icon: 'i-simple-icons-nuxt',
    color: 'text-green-500',
  },
  {
    title: 'Angular',
    icon: 'i-simple-icons-angular',
    color: 'text-red-500',
  },
  {
    title: 'ExpressJS',
    icon: 'i-simple-icons-express',
    color: 'text-slate-500',
  },
  {
    title: 'NestJS',
    icon: 'i-simple-icons-nestjs',
    color: 'text-red-500',
  },
  {
    title: 'GraphQL',
    icon: 'i-simple-icons-graphql',
    color: 'text-pink-500',
  },
  {
    title: 'Apollo GraphQL',
    icon: 'i-simple-icons-apollographql',
    color: 'text-rose-300',
  },
  {
    title: 'MongoDB',
    icon: 'i-simple-icons-mongodb',
    color: 'text-green-400',
  },
  {
    title: 'PostgreSQL',
    icon: 'i-simple-icons-postgresql',
    color: 'text-blue-500',
  },
  {
    title: 'Redis',
    icon: 'i-simple-icons-redis',
    color: 'text-red-400',
  },
  {
    title: 'SASS',
    icon: 'i-simple-icons-sass',
    color: 'text-pink-400',
  },
  {
    title: 'Tailwind CSS',
    icon: 'i-simple-icons-tailwindcss',
    color: 'text-blue-400',
  },
]
</script>
<style lang="css" scoped>
.language-and-tools {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
