<script setup lang="ts">
import type { NuxtError } from "#app";
import type { ParsedContentFile } from "@nuxt/content";

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const { data: navigation } = await useAsyncData("navigation", () =>
  queryCollectionNavigation("content")
);
// const { data: files } = await useAsyncData<any>("content-files", () =>
//   queryCollection("content")
//     .where("type", "=", "md")
//     .where("navigation", "NOT LIKE", false)
//     .all()
// );
provide("navigation", navigation);
// console.log("files", files);
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <ClientOnly>
      <UContentSearchButton />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
