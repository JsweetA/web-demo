import { useAppStore } from "@/store/app/settings";

export const baseUrl: string = "https://swsp.k8s.shuisi110.com";
export const mockUrl: string = "http://192.168.1.14:9091";
// export const devUrl = 'http://dwssp-swsp.dev.mt178.com';
// export const devUrl: string = "http://127.0.0.1:3000";
export const devUrl: string = "http://192.168.1.3:17890";
// export const devUrl: string = "http://10.64.28.202:32278";
// export const devUrl: string = "api";
export const getBaseUrl = (): string => {
	const appStore = useAppStore();
	const apiHost = localStorage.getItem("apiHost");
	const isProduct = appStore.settings.isProduct; // 如果是生产版，不允许修改api
	return apiHost && !isProduct ? `${apiHost}` : devUrl;
};

export default { baseUrl, getBaseUrl };
