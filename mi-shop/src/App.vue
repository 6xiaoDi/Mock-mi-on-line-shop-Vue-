<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export  default {
    	name: 'app',
        components: {

        },
        data() {
    		return {
    			res:{}
            }
        },
        mounted() {
            this.getUser();
            this.getCartCount();
        },
        methods:{
	        getUser(){
	        	// 防止未登录报错，给res一个默认值
                this.axios.get('/user').then((res = {})=>{
                    //保存到vuex里面
	                this.$store.dispatch('saveUserName', res.username);
                })
	        },
            getCartCount(){
	            this.axios.get('/carts/products/sum').then((res=0)=>{
		            // 保存到vuex里面
		            this.$store.dispatch('saveCartCount', res);
	            })
            }
        }
    }
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
