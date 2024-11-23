<script lang="ts" setup>
import { Ref, ref } from "vue";
import { removeBackground } from "@imgly/background-removal";

const allFiles: Ref<File[]> = ref([]);
const isDragover: Ref<Boolean> = ref(false);

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
  await removeBackground(file).then((result: any) => {
    console.log(result);
    const url = window.URL.createObjectURL(result);
    var a = document.createElement("a");
    document.getElementById("#download")?.appendChild(a);
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  });
};
</script>

<template>
  <div
    class="w-2/5 h-auto border py-5 rounded-xl flex flex-col items-center bg-slate-50 dark:bg-slate-900"
  >
    <div
      class="border-dashed border-2 rounded-xl w-10/12 h-64 flex justify-center items-center"
      @drop.prevent="dropHandler($event)"
      @dragover.prevent="setIsDragOver(true)"
      @dragleave.prevent="setIsDragOver(false)"
      :class="
        isDragover
          ? 'border-slate-300 dark:border-gray-400'
          : 'border-dashed border-slate-300 dark:border-gray-400'
      "
    >
      <p class="text-sm">
        <font-awesome-icon
          icon="fas fa-cloud-upload-alt"
          class="text-5xl text-slate-300 dark:text-gray-400"
        />
        Sube tu imagen
      </p>
    </div>
    <div
      v-for="f in allFiles"
      :key="f.name"
      class="w-10/12 px-5 py-1 my-1 flex justify-center border rounded-xl"
    >
      <div @click="removeBackgroundFile(f)">{{ f.name }}</div>
      <div @click="deleteFile(f)">X</div>
    </div>
  </div>
</template>
