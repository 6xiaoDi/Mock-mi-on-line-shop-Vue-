<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
	import Loading from './../components/Loading'
	export default{
		name:'alipay',
		components:{
			Loading
		},
		data(){
			return {
				orderId:this.$route.query.orderId,
				content:'',
				loading:true
			}
		},
		mounted(){
			this.paySubmit();
		},
		methods:{
			paySubmit(){
				this.axios.post('/pay',{
					orderId:this.orderId,
					orderName:'仿小米商城（6XiaoDi）',
					amount:0.01,//单位元
					payType:1 //1支付宝，2微信
				}).then((res)=>{
					this.content = res.content;
					setTimeout(()=>{
						// 用不了this，用原生js获取第一个表单元素（content 渲染后的页面）
						document.forms[0].submit();
					},1000)
				})
			}
		}
	}
</script>