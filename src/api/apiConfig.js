import { useAppStore } from '@/store/app/settings';

export const baseUrl = 'http://127.0.0.1:4000';
export const mockUrl = 'http://localhost';

export const getBaseUrl = () => {
  const appStore = useAppStore();
  const apiHost = localStorage.getItem('apiHost');
  const isProduct = appStore.settings.isProduct; // 如果是生产版，不允许修改api
  return apiHost && !isProduct ? `${apiHost}` : baseUrl;
};

export default { baseUrl, getBaseUrl };
