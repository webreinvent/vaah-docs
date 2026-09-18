<script setup lang="ts">
import type { NuxtError } from '#app'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

provide('navigation', navigation)

const showDetails = computed(() => {
  if (props.error?.data?.showDetails === false) return false
  return true
})
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error">
            <template v-if="error?.message" #message>
              <p>{{ error.message }}</p>
            </template>
          </UPageError>

          <div
            v-if="showDetails && (error?.statusCode || error?.message || error?.stack)"
            class="mt-8 max-w-3xl mx-auto"
          >
            <UCard>
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-500" />
                  <span class="font-semibold">Error details</span>
                </div>
              </template>

              <dl class="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm">
                <dt class="font-medium text-gray-500 dark:text-gray-400">Status</dt>
                <dd>{{ error?.statusCode }} {{ error?.statusMessage }}</dd>

                <dt class="font-medium text-gray-500 dark:text-gray-400">URL</dt>
                <dd class="break-all">{{ error?.url || (typeof window !== 'undefined' ? window.location.href : '') }}</dd>

                <template v-if="error?.message && error.message !== error?.statusMessage">
                  <dt class="font-medium text-gray-500 dark:text-gray-400">Message</dt>
                  <dd class="break-words">{{ error.message }}</dd>
                </template>
              </dl>

              <template v-if="error?.stack">
                <UDivider class="my-4" />
                <details>
                  <summary class="cursor-pointer text-sm font-medium text-gray-500 dark:text-gray-400">
                    Stack trace
                  </summary>
                  <pre class="mt-2 text-xs overflow-auto p-3 bg-gray-50 dark:bg-gray-900 rounded">{{ error.stack }}</pre>
                </details>
              </template>
            </UCard>
          </div>
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>