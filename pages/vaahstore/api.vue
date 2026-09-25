<script setup>
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'

const apiConfig = {
  url: '/vaahstore-apis.yaml',
  documentDownloadType: 'none',
  hideDarkModeToggle: true,
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
