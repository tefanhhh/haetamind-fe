<template>
  <div class="about bg-white p-8 rounded-xl">
    <h2 id="text-about" class="font-bold text-2xl sm:text-3xl break-words mb-4">
      Summary
    </h2>
    <UDivider class="mb-6" />
    <div class="grid grid-cols-12 gap-6">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="col-span-12 sm:col-span-6 md:col-span-4"
      >
        <p class="mb-0 text-sm sm:text-base">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const dayjs = useDayjs()
const years = dayjs().diff('2018-01-01', 'year')

const items = [
  `${years}+ years of experience in web development, specializing in both client-side and server-side applications`,
  'Proficient in JavaScript, TypeScript, and Node.js, with a strong focus on building scalable, maintainable solutions',
  'Demonstrated ability to lead development teams, collaborate effectively, and work independently as a full-stack developer',
]
</script>
<style lang="css" scoped>
.about {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
