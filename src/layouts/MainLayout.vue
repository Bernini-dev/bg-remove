<script setup lang="ts">
import FooterArea from '../components/partials/FooterArea.vue';
import NavBar from '../components/partials/NavBar.vue';
</script>

<template>
  <NavBar />
  <slot />
  <FooterArea />
</template>