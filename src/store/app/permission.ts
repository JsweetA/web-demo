import { defineStore } from 'pinia';
import { constantRoutes } from '@/router';

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: [...constantRoutes],
    addRoutes: [],
  }),
});
