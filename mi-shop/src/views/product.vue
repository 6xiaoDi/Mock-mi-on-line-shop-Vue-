<template>
    <div class="product">
        <product-param :title="product.name">
            <!--插槽最近的vue3.0语法-->
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2>小米10</h2>
                <h3>10周期旗舰机</h3>
                <p>
                    <a href="" id="">十年献礼，巅峰美学</a>
                    <span>|</span>
                    <a href="" id="">骁龙865</a>
                    <span>|</span>
                    <a href="" id="">16GB + 512GB</a>
                    <span>|</span>
                    <a href="" id="">120倍 超长焦微光相机</a>
                </p>
                <div class="price">
                    <span>￥<em>3999</em></span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="showSlide='slideDown'"></div>
                <div class="video-box" v-show="showSlide">
                    <!--视频遮罩-->
                    <div class="overlay"></div>
                    <div class="video" :class="showSlide">
                        <!--关闭按钮-->
                        <span class="icon-close" @click="closeVideo"></span>
                        <!--muted 静音播放-->
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import 'swiper/swiper-bundle.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import ProductParam from './../components/ProductParam'
	export default{
		name:'product',
		components:{
			swiper,
			swiperSlide,
			ProductParam
		},
		data(){
			return {
				showSlide:'',//控制动画效果
				product:{},//商品信息
				swiperOption:{
					autoplay:true,
					slidesPerView:3,
					spaceBetween: 30,
					freeMode: true,
					pagination: {
						el: '.swiper-pagination',
						clickable :true,
					}
				}
			}
		},
        mounted(){
            this.getProductInfo();
        },
        methods:{
            getProductInfo(){
                let id = this.$route.params.id;
                this.axios.get(`/products/${id}`).then((res)=>{
                    this.product = res;
                })
            },
            buy(){
                let id = this.$route.params.id;
                this.$router.push(`/detail/${id}`);
            },
            closeVideo(){
                this.showSlide='slideUp';
                setTimeout(()=>{
                	// 清除，防止动画完毕又回来，即把该元素干掉
                    this.showSlide='';
                },600)
            }
        }
	}
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .product{
        .content{
            .item-bg{
                background:url('/imgs/product/product-bg-1.png') no-repeat center;
                height:718px;
                color: white;
                text-align:center;
                h2{
                    font-size:80px;
                    padding-top:55px;
                }
                h3{
                    font-size:24px;
                    letter-spacing: 10px;
                }
                p{
                    margin-top:21px;
                    margin-bottom:40px;
                    a{
                        font-size:16px;
                        color:#ffffff;
                    }
                    span{
                        margin:0 15px;
                    }
                }
                .price{
                    font-size:30px;
                    color:#333333;
                    em{
                        font-style:normal;
                        font-size:38px;
                    }
                }
            }
            .item-bg-2{
                background:url(/imgs/product/product-bg-2.png) no-repeat center;
                height:580px;
                background-size:1226px 397px;
                background-size:100% 100%;
            }
            .item-bg-3{
                background:url(/imgs/product/product-bg-3.png) no-repeat center;
                height:638px;
                background-size:cover;
            }
            .item-swiper{
                margin:36px auto 52px;
                .desc{
                    font-size:18px;
                    color:#333333;
                    text-align:center;
                }
                img{
                    width:100%;
                }
            }
            .item-video{
                height:1044px;
                background-color:#070708;
                margin-bottom:76px;
                color:#FFFFFF;
                text-align:center;
                h2{
                    font-size:60px;
                    padding-top:82px;
                    margin-bottom:47px;
                }
                p{
                    font-size:24px;
                    margin-bottom:58px;
                }
                .video-bg{
                    background:url('/imgs/product/gallery-1.png') no-repeat center;
                    background-size:cover;
                    width:1226px;
                    height:540px;
                    margin:0 auto 120px;
                    cursor:pointer;
                }
                /*视频设计成弹框，并居中*/
                .video-box{
                    .overlay{
                        @include position(fixed);
                        /*黑色*/
                        background-color:#333333;
                        opacity:.4;
                        z-index:10;
                    }
                    /*@keyframes 定义animation动画*/
                    @keyframes slideDown{
                        /*from to 从哪到哪过度*/
                        from{
                            /*顶端*/
                            top:-50%;
                            opacity:0;
                        }
                        to{
                            top:50%;
                            opacity:1;
                        }
                    }
                    @keyframes slideUp{
                        from{
                            top:50%;
                            opacity:1;
                        }
                        to{
                            top:-50%;
                            opacity:0;
                        }
                    }
                    .video{
                        position:fixed;
                        top:-50%;
                        left:50%;
                        /*居中*/
                        transform:translate(-50%,-50%);
                        z-index:10;
                        width:1000px;
                        height:536px;
                        opacity:1;
                        &.slideDown{
                            /*第一个参数：调用的动画 第二个参数时间 第三个参数是运动曲线 linear 匀速*/
                            animation:slideDown .6s linear;
                            /*注意：动画只跑一次，然后样式就会消失，因此动画执行完毕，都让弹出框停留下来*/
                            top:50%;
                        }
                        &.slideUp{
                            animation:slideUp .6s linear;
                        }
                        .icon-close{
                            position:absolute;
                            top:20px;
                            right:20px;
                            @include bgImg(20px,20px,'/imgs/icon-close.png');
                            cursor:pointer;
                            z-index:11;
                        }
                        video{
                            width:100%;
                            height:100%;
                            /*覆盖默认样式：cover，视频内容覆盖整个窗口*/
                            object-fit:cover;
                            /*覆盖默认样式：防止产生干扰*/
                            outline:none;
                        }
                    }
                }
            }
        }
        button{
            margin-left:10px;
        }
    }
</style>