<script setup lang="ts">
import FileDrop from '../components/FileDrop.vue';
</script>

<template>
  <main class="p-56 w-full flex flex-col justify-center items-center">
    <p class="my-auto text-center mb-12">
      <span class="text-3xl font-bold">
        Elimina el Fondo Instantaneamente
      </span>
      <br />
      <span class="text-xl font-medium">
        Remueve el fondo de tus fotos en segundos
      </span>
    </p>
    <FileDrop />
    <div id="#download" class="display-none"></div>
  </main>
</template>
