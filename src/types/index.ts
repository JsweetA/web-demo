export namespace API {
	export enum Methods {
		GET = "GET",
		POST = "POST",
		PUT = "PUT",
		DELETE = "DELETE",
	}

	export type ReqType = {
		url: string;
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
