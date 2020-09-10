<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
<!--                {{title}}-->
                小米10
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
		},
		data(){
			return {
				isFixed: false
            }
        },
        mounted() {
			// 监听浏览器滚动条
            // 注意不要直接写function，否则组件消耗的时候，事件是不会被移除的。
	        window.addEventListener('scroll',this.initHeight)
        },
        methods:{
	        initHeight(){
	        	// 获取滚动条高度（考虑浏览器兼容性）
		        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		        this.isFixed = scrollTop > 152;
	        }
        },
		destroyed(){
			// 销毁事件绑定，（事件行为处理方式）第三个参数 （默认）true 捕获  false 冒泡
            // 冒泡 把一层层干掉
			window.removeEventListener('scroll',this.initHeight,false)
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
        background-color:$colorG;
        &.is_fixed{
            position:fixed;
            top:0;
            width:100%;
            box-shadow: 0 5px 5px $colorE;
        }
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