<template>
    <div class="product">
        <product-param >
            <!--插槽最近的vue3.0语法-->
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
    </div>
</template>
<script>
	import ProductParam from './../components/ProductParam'
	export default{
		name:'product',
		components:{
			ProductParam
		}
	}
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .product{
        button{
            margin-left:10px;
        }
    }
</style>