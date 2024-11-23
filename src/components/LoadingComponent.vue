<template>
  <div
    class="absolute w-screen h-screen flex justifiy-center items-center z-50"
    style="background: rgba(0, 0, 0, 0.6)"
  >
    <div
      class="ms-auto me-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
  </div>
</template>
