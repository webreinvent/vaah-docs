<script setup >
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'

definePageMeta({
  ssr: false
})

let apiConfig;

if (process.client) {
  const baseUrl = window.location.origin; // Get the current origin

  apiConfig = {
    documentDownloadType: 'none',
    hideDarkModeToggle: true,
  };
}
</script>

<template>
  <!-- Only render the ApiReference if apiConfig is defined -->
  <ApiReference />
</template>
