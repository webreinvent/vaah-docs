<script setup>

const props = defineProps(['links'])

const route = useRoute()


let links = props.links;


const isActive = (link) => (link.exact ? route.fullPath === link.path : route.fullPath.startsWith(link.path))
</script>

<template>
  <nav>

    <ul>
      <li
        v-for="link in links"
        :key="link.path"
      >
        <NuxtLink
          class="link"
          :to="link.path"
          :class="{ active: isActive(link) }"
        >

          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
