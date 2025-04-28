<template>
  <div class="tools bg-white p-8 rounded-xl">
    <h2
      id="text-tools-and-tech"
      class="font-bold text-2xl sm:text-3xl break-words mb-4"
    >
      Tools and Technologies
    </h2>
    <UDivider class="mb-6" />
    <div>
      <p class="mb-4">
        Explore the essential tools and technologies I use daily for software
        development. From coding and debugging to deployment and collaboration,
        this curated tech stack enhances my workflow and productivity as a
        Software Engineer specializing in Node.js, TypeScript, and modern web
        development.
      </p>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <h3 class="font-semibold text-lg underline">
            <ULink :to="item.path" :aria-label="item.title">{{
              item.title
            }}</ULink>
          </h3>
          <p class="text-sm">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { generateSeo } = useSeo()

useSeoMeta(
  generateSeo(
    'My Tech Stack - Tefan Haetami | Software Engineer | Node.js, TypeScript & More',
    'Explore the essential tools and technologies I use daily for software development. From coding and debugging to deployment and collaboration, this curated tech stack enhances my workflow and productivity as a Software Engineer specializing in Node.js, TypeScript, and modern web development.',
  ),
)

const items = [
  {
    title: 'Hasher Generator',
    description:
      'A powerful hasher tool for generating and verifying bcrypt, scrypt, and argon2 hashes algorithm. Securely encrypt passwords and match hashes with ease.',
    path: '/tools/hasher',
  },
]
</script>
<style lang="css" scoped>
.tools {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
