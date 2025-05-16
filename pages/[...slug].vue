<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";

definePageMeta({
  layout: "docs",
});

const route = useRoute();
const { toc, seo } = useAppConfig();

// Fetch the current page from content collection
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("content").path(withoutTrailingSlash(route.path)).first()
);

// 404 if page doesn't exist
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

// Fetch surrounding pages (prev/next)
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings("content", route.path, {
    fields: ["title", "description", "navigation"],
  })
);

// Filter out null values
const surroundArray = computed(() =>
  (surround.value?.filter(Boolean) ?? []).map((item) => ({
    _path: item.path,
    title: item.title,
    description: item.description || "",
  }))
);
// SEO metadata
useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName ?? "Docs"}`,
  title: page.value?.title,
  ogTitle: `${page.value?.title} - ${seo?.siteName ?? "Docs"}`,
  description: page.value?.description,
  ogDescription: page.value?.description,
});

// OG image config (custom component)
defineOgImage({ component: "Docs" });

// Headline and links
const headline = computed(() => findPageHeadline(page.value));
const links = computed(() =>
  [
    toc?.bottom?.edit && {
      icon: "i-heroicons-pencil-square",
      label: "Edit this page",
      to: `${toc.bottom.edit}/${page.value?.path}`,
      target: "_blank",
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
);
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="links"
      :headline="headline"
    />

    <UPageBody prose>
      <!-- Warning for outdated docs -->
      <Alert
        v-if="route.path.includes('vaahcms-1x')"
        type="warning"
        class="flex flex-col px-4 py-8 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <div>
          NOTE <br />
          YOU'RE READING AN OUTDATED DOCUMENTATION. <br />
          Latest documentation of <code>VaahCMS 2.x</code> is available at:
        </div>
        <div>
          <ULink to="/vaahcms-2x"> Checkout VaahCMS 2.x Documentation </ULink>
        </div>
      </Alert>

      <!-- Main content renderer -->
      <ContentRenderer v-if="page?.body" :value="page" />

      <!-- Prev/Next links -->
      <hr v-if="surroundArray.length" />
      {{ surroundArray }}
      <UContentSurround v-if="surroundArray.length" :surround="surroundArray" />
    </UPageBody>

    <!-- Table of contents and links -->
    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />
            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
