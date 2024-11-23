import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoadingStore = defineStore("loading",() => {
  const loadingStatus = ref(false);
  const loading = computed(() => loadingStatus.value);
  const startLoading = () => {
    loadingStatus.value = true;
  }
  const endLoading = () => {
    loadingStatus.value = false;
  }
  return {
    loading,
    startLoading,
    endLoading,
  }
});
