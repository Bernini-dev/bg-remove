<script setup lang="ts">
import demoHome from "../assets/img/demo_home.png"
import FileDrop from "../components/FileDrop.vue";
</script>

<template>
  <main>
    <section class="p-36 w-full flex flex-wrap justify-center items-center">
      <div class="p-5 flex flex-col justify-center me-8">
        <img :src="demoHome" alt="Demo Home" class="max-w-96 mb-6"/>
        <p class="my-auto mb-12">
          <span class="text-6xl font-bold">
            Quita el Fondo <br />
            a las imágenes
          <br/>
          </span>
          <br/>
          <span class="text-xl font-medium mt-12">
            100% Gratis y automático
          </span>
        </p>
      </div>
      <FileDrop />
    </section>
    <div id="#download" class="display-none"></div>
  </main>
</template>
