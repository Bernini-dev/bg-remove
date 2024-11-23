<script lang="ts" setup>
import separator from "../../assets/img/seperator-start.svg";
</script>

<template>
  <footer
    class="bg-repeat-x bg-seperator-start bg-top pt-6"
    :style="{ backgroundImage: `url(${separator})` }"
    style="background-color: #54616c"
  >
    <div class="mx-auto w-full px-8 max-w-7xl py-16">
      <div
        class="flex flex-column lg:flex-row lg:justify-between align-items-center gap-8"
      >
        <div
          class="flex flex-column-reverse flex-lg-row gap-8 justify-between align-items-center w-full"
        >
          <p class="mt-4 text-xs text-white">
            Powered by
            <a href="https://vasak.net.ar/" target="_blank">Vasak Group</a>
          </p>
          <ul
            class="flex flex-col lg:flex-row lg:!mt-0 lg:space-x-6 mb-0 align-items-center align-items-lg-start text-xs"
          >
            <li class="flex-shrink: 1; flex-grow:1;">
              <a
                href="/es/tos"
                class="group flex items-center cursor-pointer transition ease-in-out no-underline text-white hover:text-white no-touch-hover:hover:underline active:text-white py-2 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                draggable="false"
              >
                Condiciones del servicio
                <!----></a
              >
            </li>
            <li class="flex-shrink: 1; flex-grow:1;">
              <a
                href="/es/gtc"
                class="group flex items-center cursor-pointer transition ease-in-out no-underline text-white hover:text-white no-touch-hover:hover:underline active:text-white py-2 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                draggable="false"
              >
                Términos y condiciones generales
                <!----></a
              >
            </li>
            <li class="flex-shrink: 1; flex-grow:1;">
              <a
                href="/es/privacy"
                class="group flex items-center cursor-pointer transition ease-in-out no-underline text-white hover:text-white no-touch-hover:hover:underline active:text-white py-2 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                draggable="false"
              >
                Política de privacidad
                <!----></a
              >
            </li>
            <li class="flex-shrink: 1; flex-grow:1;">
              <a
                href="/es/cookies"
                class="group flex items-center cursor-pointer transition ease-in-out no-underline text-white hover:text-white no-touch-hover:hover:underline active:text-white py-2 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                draggable="false"
              >
                Política de cookies
                <!----></a
              >
            </li>
            <li class="flex-shrink: 1; flex-grow:1;">
              <a
                href="/es/imprint"
                class="group flex items-center cursor-pointer transition ease-in-out no-underline text-white hover:text-white no-touch-hover:hover:underline active:text-white py-2 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                draggable="false"
              >
                Marca
                <!----></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
