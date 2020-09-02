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
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub ? '/#/product/'+ sub.id : '' ">
                                            <img :src="sub ? sub.img : '/imgs/item-1.png'" alt="小米10至尊纪念版">
                                            {{sub ? sub.name : '小米10至尊纪念版'}}}
                                        </a>
                                    </li>
                                </ul>
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
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img :src="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
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
                ],
                // 二维数组
                menuList:[
	                [
		                {
			                id:30,
			                img:'/imgs/item-box-1.png',
			                name:'小米CC9',
		                },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
	                    },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
	                ],
                    // 后面的就不实现了，直接写死
	                [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ],
                // 广告列表
				adsList:[
					{
						id:33,
						img:'/imgs/ads/ads-1.jpg'
					},{
						id:48,
						img:'/imgs/ads/ads-2.jpg'
					},{
						id:45,
						img:'/imgs/ads/ads-3.jpg'
					},{
						id:47,
						img:'/imgs/ads/ads-4.jpg'
					}
				],
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
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a{
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
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
        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;
            }
        }
        .banner{
            margin-bottom: 50px;
        }
    }
</style>