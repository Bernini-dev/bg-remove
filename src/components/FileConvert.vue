<script lang="ts" setup>
import { defineProps, Ref, ref } from "vue";
import { removeBackground } from "@imgly/background-removal";

const props = defineProps(["file"]);
const emit = defineEmits(["deleteFile"]);
const loading: Ref<boolean> = ref(false);

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
  <div class="p-3 rounded-xl flex" style="background: #201e33">
    {{ props.file.name }}
    <button class="bg-brand text-white" @click="removeBackgroundFile()">
      Descargar
      <font-awesome-icon
        icon="fas fa-cloud-download-alt"
        class="text-slate-300"
      />
    </button>
    <div class="hidde"></div>
  </div>
  <span class="p-2" @click="deleteFile()">
    <font-awesome-icon icon="fas fa-xmark" class="text-slate-300" />
  </span>
</template>
