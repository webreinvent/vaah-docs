<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import BranchSelect from "../components/BranchSelect.vue";
const route = useRoute();

const nav = inject<Ref<NavItem[]>>("navigation");

const navigation = computed(() => {
  const n = nav.value.filter((item) => {
    return item._path.startsWith("/" + route.path.split("/")[1]);
  })[0]["children"];

  if (n.at(0)?.children) {
    return n.at(0)?.children.map((item) => {
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
