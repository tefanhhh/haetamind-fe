<template>
  <div class="experience bg-white p-8 rounded-xl">
    <h2 id="text-expr" class="font-bold text-2xl sm:text-3xl break-words mb-4">
      Experience
    </h2>
    <UDivider class="mb-6" />
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="[i < items.length - 1 && 'mb-6']"
    >
      <div
        class="flex flex-col sm:flex-row items-start justify-between gap-4 mb-2"
      >
        <div>
          <h3 class="font-semibold text-lg sm:text-xl">{{ item.company }}</h3>
          <p class="text-sm sm:text-base">{{ item.position }}</p>
        </div>
        <div>
          <p class="text-sm sm:text-right font-semibold sm:text-base">
            {{ item.location }}
          </p>
          <p class="text-sm sm:text-right sm:text-base">{{ item.period }}</p>
        </div>
      </div>
      <ul class="list-disc pl-3 sm:pl-5">
        <li
          v-for="(item2, j) in item.items"
          :key="`${j}-${i}`"
          class="text-xs sm:text-sm"
          :class="[j < item.items.length - 1 && 'mb-2']"
        >
          {{ item2 }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const items = [
  {
    company: 'Elemes Group',
    position: 'Fullstack Developer',
    location: 'South Tangerang, ID',
    period: 'April 2024 - Present',
    items: [
      `Developed and launched 4 frontend CMS systems for Bank BTPN Sharia and Bank BTPNS Ventura, featuring Server Side Rendering (SSR),
        SEO optimization, and mobile responsiveness using modern technologies such as Nuxt, Apollo GraphQL, and TailwindCSS`,
      `Designed and implemented 2 backend CMS systems with robust features for Bank BTPN Sharia and Bank BTPNS Ventura including File
        uploading to Amazon S3, Dynamic page creation and comprehensive CRUD operations, User management with LDAP integration and RoleBased Access Control (RBAC), Secure cookies for authentication, achieving successful penetration testing (pentest) compliance`,
      `Developed a custom CMS system for the Elemes Group website (www.elemesgroup.com), leveraging the same advanced features as above
        to ensure scalability, performance, and security`,
    ],
  },
  {
    company: 'Elemes Group',
    position: 'Lead Frontend Developer',
    location: 'South Tangerang, ID',
    period: 'January 2022 - Present',
    items: [
      `Developed and launched 10+ front-end systems, including LMS, Monitoring Tools, Sharia Ecosystem, and E-commerce platforms, with
features like Server-Side Rendering (SSR), SEO optimization, and mobile responsiveness using modern technologies such as Nuxt, Vuetify, and
TailwindCSS`,
      `Lead and mentored interns and junior developers, fostering their technical growth and improving team productivity`,
      `Reviewed code and facilitated discussions to ensure high-quality code standards, optimal system architecture, and adherence to best
practices`,
    ],
  },
  {
    company: 'Morula IVF Indonesia',
    position: 'Fullstack Developer',
    location: 'Remote',
    period: 'June 2022 - Present',
    items: [
      `Build client-side and server-side applications`,
      `Maintain internal applications, ensuring functionality and performance`,
      `Create RESTful APIs to support web applications`,
      `Develop web applications with a focus on user experience and scalability`,
      `Resolve bugs and troubleshoot technical issues to ensure smooth application performance`,
      `Provide technical support and advice on various challenges faced by the development team`,
    ],
  },
  {
    company: 'Angkasa Prima Indonesia',
    position: 'Frontend Developer',
    location: 'Remote',
    period: 'January 2018 - May 2022',
    items: [
      `Developed 10+ client side applications for various companies`,
      `Built web applications with key features such as API communication, Authentication, CRUD operations, Google Maps API integration`,
      `Implemented GPS-based features, including Distance calculation, GPS tracking for trucks using GPSWOX, Nearest point identification`,
      `Develop web applications with a focus on user experience and scalability`,
      `Gained a strong foundation and practical experience in programming, including web development and API integrations`,
    ],
  },
]
</script>
<style lang="css" scoped>
.experience {
  box-shadow: 0px 0px 30px 0px #e9e9e9;
}
</style>
