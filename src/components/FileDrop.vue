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

const addImage = (event: any) => {
  const droppedFiles = Array.from(event.target.files);
  console.log(droppedFiles);
  droppedFiles.forEach((f: any) => {
    allFiles.value.push(f);
  });
};

const setIsDragOver = (status: boolean) => {
  isDragover.value = status;
};

const chooseFiles = () => {
  document.getElementById("imageUpload")?.click();
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
    class="border-2 w-full flex flex-col justify-center items-center gap-8 pt-16 pb-16 rounded-3xl bg-white shadow-2xl"
    @drop.prevent="dropHandler($event)"
    @dragover.prevent="setIsDragOver(true)"
    @dragleave.prevent="setIsDragOver(false)"
    :class="isDragover ? 'border-dashed border-slate-300 ' : 'border-slate-300'"
  >
    <div class="flex flex-col gap-1.5">
      <button
        type="button"
        @click="chooseFiles()"
        class="rounded-full font-semi-bold transition ease-in-out text-center font-body no-underline hover:no-underline py-3 inline-flex items-center justify-center text-2xl font-bold text-white bg-brand active:scale-[0.97] mb-6"
      >
        <div
          class="[&amp;>svg]:scale-133 [&amp;>svg]:shrink-0 flex items-center gap-2"
        >
        <font-awesome-icon
          icon="fas fa-cloud-upload-alt"
          class="text-2xl text-white ms-1"
        />
          Cargar imagen
        </div>
      </button>
      <input id="imageUpload" ref="file" type="file" hidden @change="addImage($event)" />
      <p class="m-0 font-bold text-xl">
        O arrastrala y sueltala aquí
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
            class="text-slate-300"
          />
        </span>
        <span class="p-2" @click="deleteFile(f)">
          <font-awesome-icon
            icon="fas fa-xmark"
            class="text-slate-300"
          />
        </span>
      </div>
    </div>
  </div>
</template>
