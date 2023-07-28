import NProgress from "nprogress";
import router from "@/router";
import { getToken, setToken } from "@/utils/auth";
import "nprogress/nprogress.css";
import getPageTitle from "@/utils/getPageTitle";
import settings from "@/settings";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/404", "/403"];

router.beforeEach(async (to: any, _: any, next: any) => {
	if (settings.openProgress) NProgress.start();
	document.title = getPageTitle(to.meta.title);
	if (!settings.needLogin) setToken("1");
	if (whiteList.indexOf(to.path) !== -1) {
		next();
	}
	const hasToken = getToken();

	if (hasToken) {
		next();
	} else {
		next({
			path: `/login?redirect=${to.path}`,
		});
	}
	if (settings.openProgress) NProgress.done();
});
