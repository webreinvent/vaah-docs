<script setup lang="ts">
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'


let apiConfig;


if (process.client) {
  const baseUrl = window.location.origin; // Get the current origin

  // Construct the full URL for the OpenAPI spec file
  apiConfig = {
    spec: {
      url: `${baseUrl}/vaahstore.yaml`, // Path to your OpenAPI spec file
    },
  };
}
</script>

<template>
  <!-- Only render the ApiReference if apiConfig is defined -->
  <ApiReference v-if="apiConfig" :configuration="apiConfig" />
</template>
