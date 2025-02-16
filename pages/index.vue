<template>
  <HomeSummary />
</template>
<script lang="ts" setup>
const { generateSeo } = useSeo()

useSeoMeta(
  generateSeo(
    'Tefan Haetami | Software Engineer | Expert in Node.js, TypeScript & Full-Stack Development',
    'Experienced Software Engineer and Web Developer specializing in Node.js, TypeScript, and full-stack development. Passionate about building fast, accessible, and high-performance digital experiences. Helping businesses create scalable and user-friendly web applications.',
  ),
)
</script>
