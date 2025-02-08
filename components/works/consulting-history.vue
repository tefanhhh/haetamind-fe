<template>
  <div class="consulting-history bg-white p-8 rounded-xl">
    <h2
      id="text-consulting-history"
      class="font-bold text-2xl sm:text-3xl break-words mb-4"
    >
      &nbsp;
    </h2>
    <UDivider class="mb-6" />
    <div>
      <p>
        I have been working as a consultant for more than 3 years for Morula IVF
        Indonesia. I have been involved in the development of the Morula IVF
        Indonesia internal applications. I have also been involved in the
        maintenance and fixing bugs of the internal applications.
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        duration: 0.2,
        stagger: 0.1,
        ease: 'none',
      }),
    toggleActions: 'play none none reverse',
    once: true,
  })
}

onMounted(() => {
  animateText('consulting-history', 'Consulting History')
})
</script>
<style lang="css" scoped>
.consulting-history {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
