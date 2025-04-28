<template>
  <Works />
</template>
<script lang="ts" setup>
const { generateSeo } = useSeo()
const dayjs = useDayjs()
const years = dayjs().diff('2018-01-01', 'year')

useSeoMeta(
  generateSeo(
    'My Work - Tefan Haetami | Software Engineer, Node.js & TypeScript Expert',
    `With over ${years} years of experience, I specialize in building scalable web applications and APIs using JavaScript, TypeScript, Node.js, Angular, Vue, React, and more. I have worked on projects ranging from small apps to enterprise-grade systems. As a consultant for Morula IVF Indonesia for 3+ years, I have played a key role in developing, maintaining, and optimizing their internal applications, ensuring high performance and reliability. Passionate about solving complex problems, improving application architecture, and delivering high-quality software solutions.`,
  ),
)
</script>
