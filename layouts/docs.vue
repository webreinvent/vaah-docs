<script setup lang="ts">
import type { NavItem } from "@nuxt/content";
import BranchSelect from "../components/BranchSelect.vue";
const route = useRoute();

const nav = inject<Ref<NavItem[]>>("navigation");

const navigation = computed(() => {
  const currentPath = route.path;
  const firstSegment = "/" + currentPath.split("/")[1];

  const filtered = nav.value.filter((item) => item._path === firstSegment);

  const n = filtered.length > 0 ? filtered[0].children : [];

  if (!n || n.length === 0) return [];

  if (n.at(0)?.children) {
    return n.at(0).children.map((item) => {
      if (item._path === "/vaahstore/api") {
        return { ...item, _path: "/vaahstore/api" };
      }
      return item;
    });
  } else {
    return n;
  }
});
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
