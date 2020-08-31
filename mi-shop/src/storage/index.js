/**
 * Storage 封装
 * @type {string}
 */

const  STORAGE_key = 'mall';

export default {
	/**
	 * 存储值
	 * @param key
	 * @param value
	 * @param module_name
	 * @returns {boolean}
	 */
	setItem(key, value, module_name) {
		if (module_name) {
			let val = this.getItem(module_name);
			if (val){
				val[key] = value;
				this.setItem(module_name, val);
			}else{
				return false;
			}
		}else{
			let val = this.getStorage();
			val[key] = value;
			this.save(val);
		}
		return true;
	},
	/**
	 * 获取某一个模块下面的属性 如user下面的userName
	 * @param key
	 * @param module_name
	 * @returns {*}
	 */
	getItem(key, module_name){
		if ( module_name) {
			let val = this.getItem(module_name);
			if (val) return val;
		}
		return this.getStorage()[key];
	},
	/**
	 * 获取STORAGE_key对应的JSON对象
	 * @returns {any}
	 */
	getStorage(){
		return JSON.parse( window.sessionStorage.getItem(STORAGE_key) || {});
	},
	/**
	 * 清除STORAGE_key对应的JSON属性
	 * @param key
	 * @param module_name
	 */
	clear(key, module_name){
		let val = this.getStorage();
		if (module_name) {
			delete val[module_name][key];
		}else{
			delete val[key];
		}
		this.save(val);
	},
	/**
	 * 将val存入STORAGE_key的value
	 * @param val
	 */
	save(val) {
		window.sessionStorage.setItem(STORAGE_key, JSON.stringify(val));
	}
}