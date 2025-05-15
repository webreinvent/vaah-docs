<script setup lang="ts">
import type { NavItem } from "@nuxt/content";
import type { HeaderLink } from "@nuxt/ui-pro/types";

defineProps<{
  links: HeaderLink[];
}>();

const route = useRoute();
const { metaSymbol } = useShortcuts();

const nav = inject<Ref<NavItem[]>>("navigation");
</script>

<template>
  <UHeader
    :links="links"
    :class="{
      'border-primary-200/75 dark:border-primary-900/50': $route.path === '/',
      'border-gray-200 dark:border-gray-800': $route.path !== '/',
    }"
  >
    <template #left>
      <nuxt-link
        aria-current="page"
        to="/"
        class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
        aria-label="Logo"
      >
        Vaah Docs
      </nuxt-link>
    </template>

    <template #right>
      <ColorPicker />

      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UContentSearchButton :label="null" />
      </UTooltip>

      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider type="dashed" class="my-4" />

      <BranchSelect />
      <UNavigationTree :links="mapContentNavigation(nav)" />
    </template>
  </UHeader>
</template>
