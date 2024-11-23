<script setup lang="ts">
import LoadingComponent from './components/LoadingComponent.vue';
import MainLayout from './layouts/MainLayout.vue';
import HomePage from './pages/HomePage.vue';
import { useLoadingStore } from './stores/loadingStore';

const loadingStore = useLoadingStore();
</script>

<template>
  <LoadingComponent v-if="loadingStore.loading" />
  <MainLayout>
    <HomePage />
  </MainLayout>
</template>

