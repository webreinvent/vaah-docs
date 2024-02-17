<script setup>
defineProps(['type'])
</script>

<template>
  <div :class="[type]">
    <slot></slot>
  </div>
</template>
