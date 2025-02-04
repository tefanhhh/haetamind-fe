<template>
  <div
    class="hero flex flex-col-reverse lg:flex-row items-center justify-between gap-4"
  >
    <div class="flex-grow flex-shrink-0">
      <h1
        id="text-tefan"
        class="text-center lg:text-left font-bold text-5xl sm:text-8xl break-words"
      >
        &nbsp;
      </h1>
      <h1
        id="text-haetami"
        class="text-center lg:text-left font-bold text-5xl sm:text-8xl break-words text-primary"
      >
        &nbsp;
      </h1>
    </div>
    <div class="flex-grow-0 flex-shrink-0 lg:-mr-14">
      <ClientOnly>
        <Vue3Lottie
          animation-link="https://res.cloudinary.com/tefanhaetami/raw/upload/v1738660666/lottie-circle_y1g3ud.json"
          :height="500"
          :width="500"
          class="hidden sm:block"
        />
        <Vue3Lottie
          animation-link="https://res.cloudinary.com/tefanhaetami/raw/upload/v1738660666/lottie-circle_y1g3ud.json"
          :height="350"
          :width="350"
          class="block sm:hidden"
        />
      </ClientOnly>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function animateText(value: string) {
  const container = document.getElementById(`text-${value}`)
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
        duration: 0.5,
        stagger: 0.1,
        ease: 'none',
      }),
    toggleActions: 'play none none reverse',
    once: true,
  })
}

onMounted(() => {
  animateText('tefan')
  setTimeout(() => {
    animateText('haetami')
  }, 800)
})
</script>
