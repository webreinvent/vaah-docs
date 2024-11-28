<script setup >
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'


let apiConfig;


if (process.client) {
  const baseUrl = window.location.origin; // Get the current origin

  apiConfig = {
    spec: {
      url: `${baseUrl}/vaahstore-apis.yaml`, // Path to your OpenAPI spec file
    },
    hideDownloadButton: true,
    hideDarkModeToggle: true
  };
}
</script>

<template>
  <!-- Only render the ApiReference if apiConfig is defined -->
  <ApiReference v-if="apiConfig" :configuration="apiConfig" />
</template>
