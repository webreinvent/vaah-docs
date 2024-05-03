<script setup lang="ts">
import type {ParsedContent} from '@nuxt/content/dist/runtime/types'
import {useRootStore} from '@/stores/root'

const searchRef = ref()

const route = useRoute()
const colorMode = useColorMode()
const {branch} = useContentSource()

const {seo} = useAppConfig()

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation())
const {data: files} = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  link: [
    {rel: 'icon', href: '/favicon.ico'}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

const color = computed(() => colorMode.value === 'dark' ? '#18181b' : 'white')

const links = computed(() => {
  return [
    {
    label: 'Docs',
    icon: 'i-heroicons-book-open',
    to: '/getting-started',
  },
    {
    label: 'VaahCMS',
    icon: 'i-heroicons-rocket-launch',
    to: '/vaahcms-2x',
    active: route.path.startsWith('/vaahcms')
  },
    {
      label: 'Guide',
      icon: 'i-heroicons-rocket-launch',
      to: '/guide',
      active: route.path.startsWith('/guide')
    },
    {
      label: 'VaahCLI',
      icon: 'i-heroicons-rocket-launch',
      to: '/vaahcli',
      active: route.path.startsWith('/vaahcli')
    },
    {
      label: 'Laravel',
      icon: 'i-heroicons-rocket-launch',
      to: '/laravel/collections-and-arrays',
      active: route.path.startsWith('/laravel')
    },
    {
      label: 'VaahFlutter',
      icon: 'i-heroicons-rocket-launch',
      to: '/vaahflutter',
      active: route.path.startsWith('/vaahflutter')
    },
    {
      label: 'VaahStore',
      icon: 'i-heroicons-rocket-launch',
      to: '/vaahstore',
      active: route.path.startsWith('/vaahstore')
    },
    {
      label: 'Testing',
      icon: 'i-heroicons-rocket-launch',
      to: '/testing/automation/introduction',
      active: route.path.startsWith('/webdriverio')
    },
    {
      label: 'VaahNuxt',
      icon: 'i-heroicons-command-line',
      to: '/vaahnuxt',
      active: route.path.startsWith('/vaahnuxt')
    },
    {
      label: 'VaahShare',
      icon: 'i-heroicons-rocket-launch',
      to: '/vaahshare',
      active: route.path.startsWith('/vaahshare')
    }].filter(Boolean)
})


const rootStore = useRootStore()

provide('navigation', navigation)
</script>

<template>
  <div>
    <Header :links="links"/>

    <UMain>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </UMain>

    <Footer/>

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation"/>
    </ClientOnly>

    <UNotifications/>

  </div>
</template>
