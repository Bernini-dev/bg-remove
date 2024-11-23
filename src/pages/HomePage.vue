<script setup lang="ts">
import HomeDetails from "../components/sections/HomeDetails.vue";
import HomeStart from "../components/sections/HomeStart.vue";
import PriceDetails from "../components/sections/PriceDetails.vue";
</script>

<template>
  <main>
    <HomeStart />
    <div id="#download" class="display-none"></div>
    <HomeDetails />
    <PriceDetails />
  </main>
</template>
