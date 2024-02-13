<script setup lang="ts">


import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { HeaderLink } from '@nuxt/ui-pro/types'

defineProps<{
  links: HeaderLink[]
}>()

const route = useRoute()
const { metaSymbol } = useShortcuts()

const nav = inject<Ref<NavItem[]>>('navigation')


</script>

<template>
  <UHeader
        :links="links"
        :class="{
          'border-primary-200/75 dark:border-primary-900/50': $route.path === '/',
          'border-gray-200 dark:border-gray-800': $route.path !== '/'
        }"
      >

    <template #right>
      <ColorPicker/>

      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UDocsSearchButton :label="null"/>
      </UTooltip>

      <UColorModeButton/>

    </template>

    <template #panel>
      <UAsideLinks :links="links"/>

      <UDivider type="dashed" class="my-4"/>

      <BranchSelect/>
      <UNavigationTree :links="mapContentNavigation(navigation)"/>
    </template>
  </UHeader>
</template>





