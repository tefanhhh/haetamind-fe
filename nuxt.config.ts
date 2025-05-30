// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          href: process.env.NUXT_PUBLIC_BASE_URL,
          rel: 'canonical',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/css/app.css',
          as: 'style',
          onload: 'this.onload=null;this.rel="stylesheet"',
        },
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
          as: 'style',
          onload: 'this.onload=null;this.rel="stylesheet"',
        },
      ],
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Experienced Software Engineer and Web Developer specializing in JavaScript, TypeScript, Vue, Nuxt, NestJS, and full-stack development. Passionate about building fast, accessible, and scalable digital experiences.',
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: '/images/logo.png',
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: '630',
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: '630',
        },
        {
          key: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },

        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: '/images/logo.png',
        },
        {
          key: 'twitter:image:width',
          name: 'twitter:image:width',
          content: '630',
        },
        {
          key: 'twitter:image:height',
          name: 'twitter:image:height',
          content: '630',
        },
        {
          key: 'twitter:image:type',
          name: 'twitter:image:type',
          content: 'image/png',
        },
        {
          key: 'publisher',
          name: 'publisher',
          content: 'Tefan Haetami',
        },
        {
          key: 'keywords',
          name: 'keywords',
          content:
            'Software Engineer, Web Developer, Frontend Developer, Backend Developer, Full Stack Developer, JavaScript Developer, TypeScript Developer, Node.js, Vue.js, Nuxt.js, Angular, NestJS, Rust Developer, Git, GitHub, Docker, Cypress, Web Development, API Development, Scalable Applications, Cloud Computing, DevOps',
        },
      ],
      script: [
        {
          hid: 'gtm',
          src: '/gtm.js',
          type: 'text/javascript',
          async: true,
          defer: true,
        },
        {
          hid: 'gtm-analytics',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-KQ33F2ZMPY',
          type: 'text/javascript',
          async: true,
          defer: true,
        },
        {
          hid: 'analytics',
          src: '/analytics.js',
          type: 'text/javascript',
          async: true,
          defer: true,
        },
      ],
    },
    rootTag: 'main',
  },
  compatibilityDate: '2024-11-01',
  colorMode: {
    preference: 'light',
  },
  devtools: { enabled: true },
  devServer: {
    port: 8080,
  },
  eslint: {
    config: {
      standalone: false,
      autoInit: false,
    },
  },
  hooks: {
    'build:manifest': (manifest) => {
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        for (let i = css.length - 1; i >= 0; i--) {
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-site-config',
    'nuxt-seo-utils',
    '@nuxtjs/robots',
    'nuxt-lodash',
    '@pinia/nuxt',
  ],
  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  robots: {
    enabled: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: ['/sitemap.xml'],
  },
  routeRules: {
    '/**': {
      headers: {
        'Cache-Control': 'max-age=31536000, stale-while-revalidate=86400',
      },
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Tefan Haetami',
      givenName: 'Tefan',
      image: '/images/logo.png',
      description:
        'Experienced Software Engineer and Web Developer specializing in JavaScript, TypeScript, Vue, Nuxt, NestJS, and full-stack development. Passionate about building fast, accessible, and scalable digital experiences.',
      jobTitle:
        'Software Engineer, Web Developer, Lead Frontend Developer, Backend Developer, Full Stack Developer',
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'Angular',
        'React',
        'NestJS',
        'Node.js',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'SQL',
        'Docker',
        'CI/CD',
        'REST API',
        'Cloud Computing',
      ],
      email: 'tefanhaetami87@gmail.com',
      url: process.env.NUXT_PUBLIC_BASE_URL,
      sameAs: [
        'https://github.com/tefanhhh',
        'https://www.linkedin.com/in/tefanhaetami',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Elemes Group',
        url: 'https://www.elemesgroup.com',
      },
    }),
  },
  seo: {
    redirectToCanonicalSiteUrl: false,
  },
  sitemap: {
    autoLastmod: true,
    cacheMaxAgeSeconds: 3600,
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: 'weekly',
    },
    sitemaps: {
      general: {
        includeAppSources: true,
        include: ['/', '/works', '/tools'],
        defaults: { priority: 1 },
      },
      tools: {
        include: ['/tools/**'],
        defaults: { priority: 1 },
      },
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: 'haetamind.com',
    description:
      'Experienced Software Engineer and Web Developer specializing in JavaScript, TypeScript, Vue, Nuxt, NestJS, and full-stack development. Passionate about building fast, accessible, and scalable digital experiences.',
  },
  ui: {},
  vite: {
    build: {
      minify: true,
      cssMinify: true,
      rollupOptions: {
        treeshake: true,
      },
    },
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        threshold: 1024,
      }),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        includePublic: true,
      }),
    ],
  },
})
