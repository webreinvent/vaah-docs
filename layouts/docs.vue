<script setup lang="ts">
import BranchSelect from "../components/BranchSelect.vue";
import type { ContentNavigationItem } from "@nuxt/content";
const route = useRoute();
const nav = inject<Ref<ContentNavigationItem[]>>("navigation", ref([]));

function transformItems(items: ContentNavigationItem[]) {
  return items.map((item) => {
    const transformed = {
      title: item.title,
      _path: item.path,
    };

    if (item.children && item.children.length > 0) {
      transformed.children = transformItems(item.children);
    }

    return transformed;
  });
}

const navigation = computed(() => {
  const n = nav.value.filter((item) => {
    return item.path.startsWith("/" + route.path.split("/")[1]);
  })[0]["children"];

  let result = n;
  if (n.at(0)?.children) {
    result = n.at(0)?.children.map((item) => {
      if (item.path === "/vaahstore/api") {
        return { ...item, path: "/vaahstore/api" };
      }
      return item;
    });
  }

  return transformItems(result);
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
