<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <!-- 菜单导航是移动上去触发，不涉及点击事件 -->
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">

                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in slideList" :key='index'>
                        <!-- 每张图可以跳转 -->
                        <a :href="'/#/product' + item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="product-box"></div>
        </div>
        <ServiceBar></ServiceBar>
    </div>
</template>

<script>
	import ServiceBar from "../components/ServiceBar";
	// import 'swiper/dist/css/swiper.css'
	import 'swiper/swiper-bundle.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: "index",
		components:{
			swiper,
			swiperSlide,
			ServiceBar
		},
        data(){
			return {
				swiperOptions:{
					autoplay:true,
                    // 循环点击播放
                    loop:true,
                    // 动画
					effect : "cube",
					cubeEffect: {
						slideShadows: true,
						shadow: true,
						shadowOffset: 100,
						shadowScale: 0.6
					},
                    // 分页器
					pagination:{
						el:'.swiper-pagination',
                        clickable:true
					},
                    // 前进和后退按钮
					navigation:{
						nextEl:'.swiper-button-next',
						prevEl:'.swiper-button-prev',
					},
                },
                // 轮播图循环列表(暂时是静态的)
                slideList:[
	                {
		                id:'42',
		                img:'/imgs/slider/slide-1.jpg'
	                },
	                {
		                id:'45',
		                img:'/imgs/slider/slide-2.jpg'
	                },
	                {
		                id:'46',
		                img:'/imgs/slider/slide-3.jpg'
	                },
                    // 剩下两张无需跳转
	                {
		                id:'',
		                img:'/imgs/slider/slide-4.jpg'
	                },
	                {
		                id:'',
		                img:'/imgs/slider/slide-5.jpg'
	                }
                ]
            }
        }
	}
</script>

<style lang="scss">
    @import "./../assets/scss/config.scss";
    @import "./../assets/scss/mixin.scss";
    //插件样式覆盖
    .index{
        .swiper-box {
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                /*用透明色背景，如果用opacity，字体也会变成透明色*/
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position:relative;
                            /*a是行内元素没有大小无法填满，导致箭头在文字下方。块级元素，会填满一行，伪类默认相对a定位的*/
                            display:block;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left: 30px;
                            /* 伪类实现箭头 */
                            &:after{
                                position:absolute;
                                right:30px;
                                top:17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                        }
                    }
                }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>