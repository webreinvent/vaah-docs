<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

let defaultTitle = "WebReinvent Docs";

if(page && page.value && page.value.title)
{
  useSeoMeta({
    title: page.value.title ?? defaultTitle,
    ogTitle: page.value.title ?? defaultTitle,
    description: page.value.description,
    ogDescription: page.value.description
  })

  defineOgImage({
    component: 'Docs',
    title: page.value.title ?? defaultTitle,
    description: page.value.description
  })
}

</script>

<template>
  <div v-if="page && page.hero">
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title>
        <MDC v-if="page.hero.title" :value="page.hero.title" />
      </template>

      <MDC v-if="page.hero.code" :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>

  </div>
</template>
