export namespace API {
	export enum Methods {
		GET = "GET",
		POST = "POST",
		PUT = "PUT",
		DELETE = "DELETE",
	}

	export type ReqType = {
		url: string;
		baseUrl?: string;
		// query参数或者body参数
		data?: object;
		method?: Methods;
		headers?: object;
		describe?: string;
		errorInfo?: string;
		callback?: Function;
	};

	export type ResType = {
		data: any;
		code: number;
		msg: any;
		[value: string]: any;
	};

	export type ResError = {
		msg: string;
	};

	export type Params = {
		// 用于方便用的
		id?: string;
		url?: string;
		// query,body,path
		path?: any;
		query?: any;
		body?: any;
		[value: string]: any;
	};
}

export namespace REQUEST {
	// 大于600 的全是token问题
	export const TOKEN_ERROR = 600;
	export const NORMAL = 200;
}
