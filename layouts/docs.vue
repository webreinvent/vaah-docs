<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import BranchSelect from "../components/BranchSelect.vue";
const route = useRoute()

const nav = inject<Ref<NavItem[]>>('navigation')

const navigation = computed(() => {
  return nav.value.filter(item => item._path.startsWith('/'+route.path.split("/")[1]));
})

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <BranchSelect />

          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
