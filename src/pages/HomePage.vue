<script setup lang="ts">
import demoHome from "../assets/img/demo_home.png";
import FileDrop from "../components/FileDrop.vue";
import HomeDetails from "../components/sections/HomeDetails.vue";
import HomeStart from "../components/sections/HomeStart.vue";
</script>

<template>
  <main>
    <HomeStart />
    <div id="#download" class="display-none"></div>
    <HomeDetails />
  </main>
</template>
