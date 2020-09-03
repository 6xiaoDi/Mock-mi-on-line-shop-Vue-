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
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img :src="'/imgs/mix-alpha.jpg'" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key="j">
                                <!--接口未说明新品还是秒杀，这里暂时偶数形式为新品-->
                                <span v-if="j%2==0" :class="'new-pro'">新品</span>
                                <span v-else :class="'kill-pro'">秒杀</span>
                                <div class="item-img">
                                    <img :src="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ServiceBar></ServiceBar>
        <Modal
                title="提示"
                sureText="查看购物车"
                btnType="1"
                modalType="middle"
                :showModal="showModal"
                @submit="goToCart"
                @cancel="showModal=false"
        >
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </Modal>
    </div>
</template>

<script>
	import ServiceBar from "../components/ServiceBar";
	import Modal from "../components/Modal";
	import 'swiper/swiper-bundle.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: "index",
		components:{
			swiper,
			swiperSlide,
			ServiceBar,
			Modal
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
                // 主导航右侧弹框商品列表（二维数组）
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
                // 首页手机列表（二维数组）
				phoneList:[],
                // 默认不显示购物车提示弹框
				showModal:false
            }
        },
        mounted(){
            this.init();
        },
        methods: {
	        init(){
		        this.axios.get('/products',{
			        params:{
			        	// 手机品类
				        categoryId:100012,
                        // 拉取14条数据
				        pageSize:14
			        }
		        }).then((res)=>{
		        	// 注意splice和slice的区别，slice不改变原数组
                    // 后台接口前6张照片是给首页导航菜单用的，因此图片尺寸对于此处不合适，我们取后面的数据
			        res.list = res.list.slice(6,14);
			        // 一行四个元素
			        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
		        })
	        },
	        addCart(id){
		        this.showModal = true;
		        // this.axios.post('/carts',{
			    //     productId:id,
			    //     selected: true
		        // }).then(()=>{
		        // }).catch(()=>{
			    //     this.showModal = true;
		        // });
	        },
	        goToCart(){
		        this.$router.push('/cart');
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
        .product-box{
            background-color: $colorJ;
            padding: 30px 0 50px;
            h2{
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 20px;
            }
            .wrapper{
                display:flex;
                .banner-left{
                    margin-right:16px;
                    img{
                        width:224px;
                        height:619px;
                    }
                }
            }
            .list-box{
                .list{
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    /*两行元素，最后一行没有底部外边距*/
                    &:last-child{
                        margin-bottom: 0;
                    }
                    .item{
                        width:236px;
                        height:302px;
                        background-color:$colorG;
                        text-align:center;
                        /*如：新品标记*/
                        span{
                            display:inline-block;
                            width:67px;
                            height:24px;
                            font-size:14px;
                            line-height:24px;
                            /*字体白色*/
                            color:$colorG;
                            /*新品标签**/
                            &.new-pro{
                                background-color:#7ECF68;
                            }
                            /*秒杀标签*/
                            &.kill-pro{
                                background-color:#E82626;
                            }
                        }
                        .item-img{
                            img{
                                width:100%;
                                height:195px;
                            }
                        }
                        .item-info{
                            /*商品名称*/
                            h3{
                                font-size:$fontJ;
                                color:$colorB;
                                line-height:$fontJ;
                                font-weight:bold;
                            }
                            /*商品描述*/
                            p{
                                color:$colorD;
                                line-height:13px;
                                margin:6px auto 13px;
                            }
                            /*商品价格*/
                            .price{
                                color:#F20A0A;
                                font-size:$fontJ;
                                font-weight:bold;
                                /*变小手，可以点击购物车加购物车*/
                                cursor:pointer;
                                &:after{
                                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                    content:' ';
                                    margin-left:5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>