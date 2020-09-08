<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <!--按钮：使用插槽，由父级传入（定制），方便其他页面复用-->
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
		name:'nav-bar',
		props:{
			title:String
		}
	}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .nav-bar{
        height:70px;
        line-height:70px;
        border-top:1px solid $colorH;
        .container{
            @include flex();
            .pro-title{
                font-size:$fontH;
                color:$colorB;
                font-weight:bold;
            }
            .pro-param{
                font-size:$fontJ;
                span{
                    margin:0 10px;
                }
                a{
                    color:$colorC;
                }
            }
        }
    }
</style>