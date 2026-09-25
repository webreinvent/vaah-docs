<script setup>
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'

const { seo } = useAppConfig()

function hashToTitle(hash) {
    if (!hash) return 'Overview'
    const parts = decodeURIComponent(hash.replace('#', '')).split('/')
    const slug = parts[parts.length - 1] || parts[parts.length - 2] || ''
    return slug
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
}

const currentHash = ref('')

const updateHash = () => {
    currentHash.value = window.location.hash
}

onMounted(() => {
    updateHash()
    window.addEventListener('hashchange', updateHash)
})
onBeforeUnmount(() => {
    window.removeEventListener('hashchange', updateHash)
})

const pageTitle = computed(() => hashToTitle(currentHash.value))

useSeoMeta({
    titleTemplate: `%s - ${seo?.siteName}`,
    title: () => `${pageTitle.value} · VaahStore API Reference`,
    ogTitle: () => `${pageTitle.value} · VaahStore API Reference - ${seo?.siteName}`,
    ogDescription: 'Interactive REST API reference for VaahStore — endpoints, authentication, parameters and responses.',
    twitterCard: 'summary_large_image'
})

const apiConfig = {
    url: '/vaahstore-apis.yaml',
    documentDownloadType: 'none',
    hideDarkModeToggle: true
}
</script>

<template>
    <ClientOnly>
        <ApiReference :configuration="apiConfig" />
        <template #fallback>
            <div>Loading API reference…</div>
        </template>
    </ClientOnly>
</template>