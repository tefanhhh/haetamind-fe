<template>
  <div class="project-history bg-white p-8 rounded-xl">
    <h2
      id="text-project-history"
      class="font-bold text-2xl sm:text-3xl break-words mb-4"
    >
      &nbsp;
    </h2>
    <UDivider class="mb-6" />
    <div>
      <p>
        I have been coding for over {{ years }}+ years, working on projects of
        all sizes, from small-scale applications to large-scale systems. I have
        experience in building web applications and APIs, using a variety of
        technologies such as JavaScript, TypeScript, Node.js, Angular, Vue, and
        more. Here are some of my current and past works:
      </p>
      <div class="mb-6"></div>
      <ul>
        <li v-for="(item, i) in items" :key="i" class="mb-6">
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <h4 class="text-slate-500 font-semibold italic mb-1">
            {{ item.role }}
          </h4>
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <UBadge
              v-for="(item2, j) in item.platform"
              :key="`${i}-${j}`"
              :label="item2"
              color="red"
              variant="subtle"
              :ui="{
                rounded: 'rounded-full',
                size: {
                  sm: 'px-3',
                },
              }"
            />
          </div>
          <p class="mb-2">
            {{ item.description }}
          </p>

          <div v-if="item.url" class="mb-2">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:underline text-sm font-normal"
              >{{ item.url }}</a
            >
          </div>

          <h4 class="font-semibold text-sm mb-1">Tools:</h4>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <UBadge
              v-for="(item2, j) in item.tech"
              :key="`${i}-${j}`"
              :label="item2"
              color="sky"
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
    url: 'https://btpnsyariah.com/',
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
    url: 'https://elemesgroup.com/',
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
    url: 'https://bestee.id/',
    description: `Bestee Platform is an integrated platform for monitoring Bank BTPN Syariah's customer assistance and empowerment activities. The Bestee Platform consists of Web Admin, Web Facilitator, Web Mentor, App Kita Bestee (Facilitator) & App BesteeKu (Customer Learning).`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'LearningX Educational Tech Platform',
    platform: ['Landing', 'Dashboard', 'Web User'],
    url: 'https://learningx.com/',
    description: `LearningX is an online educational technology platform for students from elementary to university level in Indonesia. Initiated by LX International (formerly LG International), LearningX was developed to harness the potential of young talents in Indonesia's technology industry, aiming to provide a platform to enhance their skills.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Masmiinah, Sharia Ecosystem for Mosques',
    platform: ['Landing', 'Dashboard'],
    url: 'https://masmiinahinv.com/',
    description: `Masmiinah was created as an initial project and innovative product by Elemes Group. Masmiinah was created as platform that integrates technology with Islamic values within a Shariah-compliant ecosystem. This platform benefits individuals by facilitating religious transactions and social activities, while also supporting Islamic institutions and communities.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Lajoe Ecommerce Platform',
    platform: ['Landing', 'Dashboard', 'Web User'],
    url: 'https://lajoe.id/',
    description: `Lajoe was created as an initial project and innovative product by Elemes Group. Lajoe was created as a digital business in Indonesia for curated secondhand goods.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Lions Good Bank',
    platform: ['Landing', 'Dashboard', 'Web User'],
    url: 'https://www.lionsgoodbank.or.id/',
    description: `Lions Good Bank is a program by Lions Indonesia, initiated by the Lions Indonesia Foundation, where its activities involve collecting, storing, and distributing goods and food to individuals, families, and community groups in need.`,
    role: 'Frontend Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'SCSS'],
  },
  {
    title: 'Morula Ambassador',
    platform: ['Dashboard'],
    description: `Morula Ambassador is a platform for Morula Indonesia, a company that focuses on providing health and beauty products. The platform is used to manage the company's ambassadors and their activities.`,
    role: 'Fullstack Developer',
    tech: [
      'TypeScript',
      'NodeJS',
      'Nuxt',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
    ],
  },
  {
    title: 'API Teramedik Morula IVF Indonesia',
    platform: ['API'],
    description: `API Teramedik Morula IVF Indonesia is an API for Teramedik Morula IVF Indonesia, a company that focuses on providing health and beauty products. The API is used to manage the company's IVF Indonesia data.`,
    role: 'Backend Developer',
    tech: ['NodeJS', 'NestJS', 'TypeScript'],
  },
  {
    title: 'Morula IVF Monitoring',
    platform: ['Dashboard'],
    description: `Morula IVF Monitoring is a platform for Morula Indonesia, a company that focuses on providing health and beauty products. The platform is used to monitor the company's IVF Indonesia data.`,
    role: 'Frontend Developer',
    tech: ['NodeJS', 'Angular', 'Angular Material', 'RxJS', 'TypeScript'],
  },
  {
    title: 'Morula Push Virtual Account',
    platform: ['Dashboard'],
    description:
      'Morula Push Virtual Account is a platform for Morula Indonesia, a company that focuses on providing health and beauty products.',
    role: 'Fullstack Developer',
    tech: ['TypeScript', 'NodeJS', 'Nuxt', 'Tailwind CSS', 'NestJS'],
  },
  {
    title: 'Fenita Core Fleet',
    platform: ['Dashboard', 'Mobile App'],
    description: `Fenita Core Fleet is a platform for Nutech Indonesia, a company that focuses on providing fleet management services.`,
    role: 'Frontend Developer',
    tech: [
      'NodeJS',
      'Angular',
      'Angular Material',
      'RxJS',
      'TypeScript',
      'Ionic',
      'Apache Cordova',
    ],
  },
  {
    title: 'Logbee ID',
    platform: ['Dashboard', 'Mobile App'],
    description: `Logbee ID is a platform for Logbee Logistics Indonesia, a company that focuses on providing logistics services.`,
    role: 'Frontend Developer',
    tech: [
      'NodeJS',
      'Angular',
      'Angular Material',
      'RxJS',
      'TypeScript',
      'Ionic',
      'Apache Cordova',
    ],
  },
  {
    title: 'B-Log Indonesia',
    platform: ['Dashboard', 'Mobile App'],
    description: `B-Log Indonesia is a platform for B-Log Indonesia, a company that focuses on providing logistics services.`,
    role: 'Frontend Developer',
    tech: [
      'NodeJS',
      'Angular',
      'Angular Material',
      'RxJS',
      'TypeScript',
      'Ionic',
      'Apache Cordova',
    ],
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
  animateText('project-history', 'Project History')
})
</script>
<style lang="css" scoped>
.project-history {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
