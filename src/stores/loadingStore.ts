import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loading",() => {
  const loading = ref(false);
  const startLoading = () => {
    loading.value = true;
  }
  const endLoading = () => {
    loading.value = false;
  }
  return {
    loading,
    startLoading,
    endLoading,
  }
});
