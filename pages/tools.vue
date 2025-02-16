<template>
  <div>
    <h1 class="text-center text-xl font-bold">Still in progress...</h1>
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
</script>
