import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios";
import App from './App.vue'
// import env from './env/env'


// 根据前端的跨域方式做调整（接口代理：接口域名和前端域名一样，jsonp和CROS，需要设置成http形式）
// 这里是代理方式，如'/api/getUsr'  =>  转发后前缀被干掉'/getUsr'
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; // 不设置的话，体验很差

// 根据环境变量设置不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 对错误进行拦截，不做请求拦截，因为商场系统没有太多表单，即没有过多参数处理，主要处理接口返回值
axios.interceptors.response.use(function (response) {
	let res = response.data;
	// 成功
	if (res.status === 0) {
		return res.data();
	//	未登录
	}else if (res.status === 10) {
		// 跳转到登录界面（在vue实例中才能用路由，这里不行）
		window.location.href = '/#/login';
	//	错位拦截
	}else{
		alert(res.msg);
	}
});


Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
