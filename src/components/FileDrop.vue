<script lang="ts" setup>
import { Ref, ref } from "vue";
import { removeBackground } from "@imgly/background-removal";
import { useLoadingStore } from "../stores/loadingStore";

const allFiles: Ref<File[]> = ref([]);
const isDragover: Ref<Boolean> = ref(false);
const loadingStore = useLoadingStore();

const dropHandler = (event: any) => {
  const droppedFiles = Array.from(event.dataTransfer.files);
  console.log(droppedFiles);
  droppedFiles.forEach((f: any) => {
    allFiles.value.push(f);
  });
  isDragover.value = false;
};

const setIsDragOver = (status: boolean) => {
  isDragover.value = status;
};

const deleteFile = (file: File) => {
  allFiles.value = allFiles.value.filter((f) => f !== file);
};

const removeBackgroundFile = async (file: File) => {
  loadingStore.startLoading();
  await removeBackground(file).then((result: any) => {
    const url = window.URL.createObjectURL(result);
    var a = document.createElement("a");
    document.getElementById("#download")?.appendChild(a);
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  });
  loadingStore.endLoading();
};
</script>

<template>
  <div
    class="h-auto py-5 rounded-3xl flex flex-col items-center w-80"
  >
    <div
      class="border border-2 rounded-3xl w-10/12 h-64 flex justify-center items-center bg-slate-50 dark:bg-slate-900"
      @drop.prevent="dropHandler($event)"
      @dragover.prevent="setIsDragOver(true)"
      @dragleave.prevent="setIsDragOver(false)"
      :class="
        isDragover
          ? 'border-dashed border-slate-300 dark:border-gray-400'
          : 'border-slate-300 dark:border-gray-400'
      "
    >
      <p class="text-sm">
        <font-awesome-icon
          icon="fas fa-cloud-upload-alt"
          class="text-2xl text-slate-300 dark:text-gray-400"
        />
        Arrastra aqui tu imagen
      </p>
    </div>
    <div
      v-for="f in allFiles"
      :key="f.name"
      class="w-10/12 px-5 py-1 my-1 flex justify-center border rounded-xl"
    >
      <div>{{ f.name }}</div>
      <div class="ms-auto">
        <span class="p-2" @click="removeBackgroundFile(f)">
          <font-awesome-icon
            icon="fas fa-cloud-download-alt"
            class="text-slate-300 dark:text-gray-400"
          />
        </span>
        <span class="p-2" @click="deleteFile(f)">
          <font-awesome-icon
            icon="fas fa-xmark"
            class="text-slate-300 dark:text-gray-400"
          />
        </span>
      </div>
    </div>
  </div>
</template>
