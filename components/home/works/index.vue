<template>
  <div class="work-history bg-white p-8 rounded-xl">
    <h2
      id="text-work-history"
      class="font-bold text-2xl sm:text-3xl break-words mb-4"
    >
      &nbsp;
    </h2>
    <UDivider class="mb-6" />
    <div>
      <p>
        I have been doing code for over {{ years }}+ years. I have worked on
        various projects, from small to large scale projects. I have experience
        in building web applications and APIs. I have worked with various
        technologies, such as JavaScript, TypeScript, Node.js, Angular, Vue, and
        many more. Here is some of my current and past works:
      </p>
      <div class="mb-8"></div>
      <ul>
        <li v-for="(item, i) in items" :key="i" class="mb-4">
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <h4 class="text-slate-500 font-semibold italic mb-1">
            {{ item.role }}
          </h4>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <UBadge
              v-for="(item2, j) in item.platform"
              :key="`${i}-${j}`"
              :label="item2"
              color="red"
              variant="subtle"
            />
          </div>
          <p class="mb-2">{{ item.description }}</p>
          <h4 class="font-semibold text-sm mb-1">Tools:</h4>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <UBadge
              v-for="(item2, j) in item.tech"
              :key="`${i}-${j}`"
              :label="item2"
              color="blue"
              variant="subtle"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const dayjs = useDayjs()
const years = dayjs().diff('2018-01-01', 'year')

const items = [
  {
    title: 'BTPN Syariah',
    platform: ['Landing', 'CMS'],
    description:
      'The BTPNS project focuses on developing a Content Management System (CMS) console that enables users to create and modify web pages for the BTPNS website. This console is designed to enhance user experience with a more intuitive interface, improved efficiency, and optimized performance.',
    role: 'Fullstack Developer',
    tech: [
      'TypeScript',
      'NodeJS',
      'Nuxt',
      'Tailwind CSS',
      'NestJS',
      'MongoDB',
      'GraphQL',
      'LDAP',
      'Redis',
      'Mailer',
    ],
  },
  {
    title: 'BTPN Syariah Ventura',
    platform: ['Landing', 'CMS'],
    description:
      'The BTPNS Ventura project focuses on developing a Content Management System (CMS) console that enables users to create and modify web pages for the BTPNS Ventura website. This console is designed to enhance user experience with a more intuitive interface, improved efficiency, and optimized performance.',
    role: 'Fullstack Developer',
    tech: [
      'TypeScript',
      'NodeJS',
      'Nuxt',
      'Tailwind CSS',
      'NestJS',
      'MongoDB',
      'GraphQL',
      'LDAP',
      'Redis',
      'Mailer',
    ],
  },
  {
    title: 'Elemes Group',
    platform: ['Landing', 'CMS'],
    description:
      "A content management system for Elemes Group, an IT company in Indonesia. The CMS is built with Nuxt and NestJS, and it is used to manage the company's website content.",
    role: 'Fullstack Developer',
    tech: [
      'TypeScript',
      'NodeJS',
      'Nuxt',
      'Tailwind CSS',
      'NestJS',
      'MongoDB',
      'GraphQL',
      'Redis',
    ],
  },
  {
    title: 'Bestee Internship Program Platform',
    platform: ['Landing', 'Dashboard', 'Web User'],
    description: `Bestee Platform is an integrated platform for monitoring Bank BTPN Syariah's customer assistance and empowerment activities. The Bestee Platform consists of Web Admin, Web Facilitator, Web Mentor, App Kita Bestee (Facilitator) & App BesteeKu (Customer Learning).`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'LearningX Educational Tech Platform',
    platform: ['Landing', 'Dashboard', 'Web User'],
    description: `LearningX is an online educational technology platform for students from elementary to university level in Indonesia. Initiated by LX International (formerly LG International), LearningX was developed to harness the potential of young talents in Indonesia's technology industry, aiming to provide a platform to enhance their skills.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Masmiinah, Sharia Ecosystem for Mosques',
    platform: ['Landing', 'Dashboard'],
    description: `Masmiinah was created as an initial project and innovative product by Elemes Group. Masmiinah was created as platform that integrates technology with Islamic values within a Shariah-compliant ecosystem. This platform benefits individuals by facilitating religious transactions and social activities, while also supporting Islamic institutions and communities.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Lajoe Ecommerce Platform',
    platform: ['Landing', 'Dashboard', 'Web User'],
    description: `Lajoe was created as an initial project and innovative product by Elemes Group. Lajoe was created as a digital business in Indonesia for curated secondhand goods.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Lions Good Bank',
    platform: ['Landing', 'Dashboard', 'Web User'],
    description: `Lions Good Bank is a program by Lions Indonesia, initiated by the Lions Indonesia Foundation, where its activities involve collecting, storing, and distributing goods and food to individuals, families, and community groups in need.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
]

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
  animateText('work-history', 'Work History')
})
</script>
<style lang="css" scoped>
.work-history {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
