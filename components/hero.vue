<template>
  <div class="hero flex flex-row items-center justify-between gap-4 sm:py-12">
    <div class="flex-shrink-0">
      <h2
        id="text-tefan"
        class="text-left font-bold text-4xl sm:text-6xl md:text-8xl break-words"
      >
        &nbsp;
      </h2>
      <h2
        id="text-haetami"
        class="text-left font-bold text-4xl sm:text-6xl md:text-8xl break-words text-primary"
      >
        &nbsp;
      </h2>
    </div>
    <div class="flex-shrink-0">
      <div
        class="circle opacity-0 h-24 sm:h-60 lg:h-80 w-24 sm:w-60 lg:w-80 rounded-full bg-black relative overflow-hidden"
      >
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <NuxtImg
            format="webp"
            src="/images/logo-soft.png"
            alt="Haetamind Logo Soft"
            loading="lazy"
            width="184"
            height="184"
            class="animate-spin-slow-md"
          />
        </div>
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[96px] sm:h-[242px] lg:w-[324px] w-[96px] sm:w-[242px] lg:h-[324px]"
        >
          <NuxtImg
            format="webp"
            src="/images/logo-frame.png"
            alt="Haetamind Frame"
            loading="lazy"
            width="324"
            height="324"
            class="animate-spin-slow"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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

function animateCircle() {
  gsap.to('.circle', {
    opacity: 1,
    duration: 1,
    delay: 0.8,
    ease: 'power2.out', // Smooth easing
  })
}

onMounted(() => {
  animateText('tefan')
  setTimeout(() => {
    animateText('haetami')
    animateCircle()
  }, 800)
})
</script>
<style lang="css" scoped>
.circle {
  box-shadow: 0px 0px 30px -8px #f59e0b;
}
</style>
