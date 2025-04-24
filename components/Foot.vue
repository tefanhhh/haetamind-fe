<template>
  <footer class="bg-black py-8">
    <h2 class="text-center text-white">&copy;{{ dayjs().year() }} Haetamind</h2>
  </footer>
</template>
<script setup lang="ts">
const dayjs = useDayjs()
</script>
