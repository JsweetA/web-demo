import Fly from "flyio/dist/npm/fly";
import { Notification } from "@arco-design/web-vue";
import { getBaseUrl } from "../apiConfig";
import { API, REQUEST } from "@/types/index";
import { getToken, removeToken } from "@/utils/auth";
// import router from "@/router";

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
		baseUrl = getBaseUrl(),
	} = req;
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
				const data = (res?.data ? res?.data : res) as API.ResType;
				data?.code !== REQUEST.NORMAL
					? reject({ message: data.msg, ...data })
					: (describe.length && Notification.info(describe), resolve(data?.data as T));
			})
			.catch((e: any) => {
				callback && callback(e);
				reject({ ...e.response.data, ...e });
			});
	}).catch((res) => {
		Notification.error(errorInfo || res?.msg || "请求失败");
		res?.code > REQUEST.TOKEN_ERROR &&
			setTimeout(() => {
				// 跳转到login
			}, 2000);
		// 抛出错误，阻止后续事件
		throw new Error(JSON.stringify(res));
	}) as T;
};

export default request;
