import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie"
import store from "./store";
import App from './App.vue'
// import env from './env/env'

const mock = false; // mock开关
if (mock) {
	require('./mock/api');
}


// 根据前端的跨域方式做调整（接口代理：接口域名和前端域名一样，jsonp和CROS，需要设置成http形式）
// 这里是代理方式，如'/api/getUsr'  =>  转发后前缀被干掉'/getUsr'
axios.defaults.baseURL = '/api';
// easy-mock 对应 url
// axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5f4d0651b52a25318ce1f205/mock';
axios.defaults.timeout = 8000; // 不设置的话，体验很差

// 根据环境变量设置不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 对错误进行拦截，不做请求拦截，因为商场系统没有太多表单，即没有过多参数处理，主要处理接口返回值
axios.interceptors.response.use(function (response) {
	let res = response.data;
	let path = location.hash;
	// 成功
	if (res.status === 0) {
		return res.data;
	//	未登录
	}else if (res.status === 10) {
		// 非首页的话，需要登录才行
		if (path !== '#/index') {
			// 跳转到登录界面（在vue实例中才能用路由，这里不行）
			window.location.href = '/#/login';
		}

	//	错位拦截
	}else{
		alert(res.msg);
		// 报错之后不希望promise返回成功，而是抛出问题
		return Promise.reject();
	}
});


Vue.use(VueAxios,axios);
Vue.use(VueCookie);
// 配置图片懒加载
Vue.use(VueLazyload,{
	// 条状的
	loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
