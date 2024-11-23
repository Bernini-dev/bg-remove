<script lang="ts" setup>
import DarkMode from '../DarkMode.vue';
</script>

<template>
    <!--dark mode - text and icons-->
    <nav
      class="p-5 mb-3 common-text bg-white dark:bg-gray-900 shadow-lg font-medium capitalize flex content-center items-center"
    >
      <span class="px-2 mr-2 border-xl border-gray-800"> Remove BG </span>
      <div class="ml-auto mr-auto flex">
        <a
          href="/"
          class="px-6 py-3 mx-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-800 hover:text-white text-sm rounded-xl flex content-center items-center"
        >
          <font-awesome-icon
            icon="fas fa-home"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full w-4 h-4"
          />
          <span class="mx-1 hidden md:block"> Home </span>
        </a>
      </div>
      <div>
        <DarkMode />
      </div>
    </nav>
</template>