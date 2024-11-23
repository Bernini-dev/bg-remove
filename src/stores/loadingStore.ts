import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => {
    return { loadingStatus: false };
  },
  getters: {
    getLoading(): boolean {
      return this.loadingStatus;
    },
  },
  computed: {
    loading(): boolean {
      return this.getLoading();
    },
  },
  actions: {
    startLoading() {
      this.loadingStatus = true;
    },
    endLoading() {
      this.loadingStatus = false;
    },
  },
});
