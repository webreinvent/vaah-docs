<script setup >
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'

let apiConfig;

if (process.client) {
  const baseUrl = window.location.origin; // Get the current origin

  apiConfig = {
    url: `${baseUrl}/vaahstore-apis.yaml`, // Path to your OpenAPI spec file
    documentDownloadType: 'none',
    hideDarkModeToggle: true,
    generateOperationSlug: ({ method, path }) =>
      `${method}${path.replace(/[^A-Za-z0-9]+/g, '-')}`.replace(/^-|-$/g, '')
  };
}
</script>

<template>
  <!-- Only render the ApiReference if apiConfig is defined -->
  <ApiReference v-if="apiConfig" :configuration="apiConfig" />
</template>
