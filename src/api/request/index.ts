import Fly from "flyio/dist/npm/fly";
import { Notification } from "@arco-design/web-vue";
import { getBaseUrl } from "../apiConfig";
import { API } from "@/types/index";
import { getToken } from "@/utils/auth";

const fly = new Fly();

export const request = <T>(req: API.ReqType): T => {
	const {
		url,
		data,
		method = API.Methods.GET,
		headers = {},
		describe = "",
		errorInfo = "",
		callback,
	} = req;
	const baseUrl = getBaseUrl();
	const token = getToken();
	return new Promise((resolve, reject) => {
		fly
			.request(`${baseUrl}${url}`, data, {
				method,
				headers: {
					"content-type": "application/json",
					accept: "*/*",
					...headers,
					// env: "dev",
					token,
				},
			})
			.then((res: any) => {
				const data: API.ResType = res?.data ? res?.data : res;
				if (data?.code !== 200) {
					Notification.error(errorInfo || data.msg);
					reject({ message: data.msg });
				} else {
					describe.length && Notification.info(describe);
					resolve(data?.data as T);
				}
			})
			.catch((e: any) => {
				if (callback) callback(e);
				reject(e);
				Notification.error(errorInfo || e?.msg || "请求失败");
			});
	}) as T;
};

export default request;
