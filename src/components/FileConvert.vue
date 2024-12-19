<script lang="ts" setup>
import { defineProps, Ref, ref } from "vue";
import { removeBackground } from "@imgly/background-removal";

const props = defineProps(["file"]);
const emit = defineEmits(["deleteFile"]);
const loading: Ref<boolean> = ref(false);
const mainWindow = window;

const deleteFile = () => {
  emit("deleteFile");
};

const removeBackgroundFile = async () => {
  loading.value = true;
  await removeBackground(props.file).then((result: any) => {
    const url = window.URL.createObjectURL(result);
    var a = document.createElement("a");
    document.getElementById(`#download-${props.file.name}`)?.appendChild(a);
    a.href = url;
    a.download = `${props.file.name}.png`;
    a.click();
    window.URL.revokeObjectURL(url);
  });
  loading.value = false;
};
</script>

<template>
  <div
    class="p-3 rounded-xl flex flex-col gap-2 w-80 relative pt-8"
    style="background: #201e33"
  >
    <div
      class="rounded-xl bg-center bg-no-repeat bg-cover aspect-video w-full mt-2 relative"
      :style="`background-image: url(${mainWindow.URL.createObjectURL(
        props.file
      )});`"
    >
      <div
        v-if="loading"
        class="absolute top-0 bottom-0 left-0 right-0 rounded-xl flex flex-wrap justify-center content-center"
        style="background: #191135eb"
      >
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
      </div>
    </div>

    {{ props.file.name }}
    <button
      class="bg-brand text-white rounded-xl p-3"
      @click="removeBackgroundFile()"
    >
      Descargar
      <font-awesome-icon
        icon="fas fa-cloud-download-alt"
        class="text-slate-300"
      />
    </button>
    <div class="hidde"></div>

    <span class="p-2 absolute top-1 right-1" @click="deleteFile()">
      <font-awesome-icon icon="fas fa-xmark" class="text-slate-300" />
    </span>
  </div>
</template>
