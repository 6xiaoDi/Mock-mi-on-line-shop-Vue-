<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:">小米商城</a>
                    <a href="javascript:">MUI</a>
                    <a href="javascript:">loT</a>
                    <a href="javascript:">金融</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:" v-if="username">{{username}}</a>
                    <a href="javascript:" v-if="!username" @click="login()">登录</a>
                    <a href="javascript:" v-if="username" @click="logout()">退出</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <a href="javascript:" class="my-cart" @click="goToCart()">
                        <span class="icon-cart"></span>
                        购物车({{cartCount}})
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <!--多个下拉区域菜单，因此不要用a，而是div-->
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="item in phoneList" :key="item.id">
                                    <!-- 在新窗口打开 -->
                                    <a :href="'/#/product' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle" >
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{ item.price | currency }}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi 红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "nav-header",
        data(){
        	return {
                phoneList:[]
            }
        },
        computed:{
        	// 直接用法
            username(){
            	return this.$store.state.username;
            },
            cartCount(){
            	return this.$store.state.cartCount;
            }
            // mapState用法
            // ...mapState(['username','cartCount'])
        },
	    mounted() {
            this.getProductList();
            // 从登录页面跳过来，才重新获取购物车数量
            if (this.$route.params && (this.$route.params.from === 'login')) {
	            this.getCartCount();
            }
        },
        methods:{
        	login(){
        		this.$router.push('/login');
            },
        	getProductList(){
        		this.axios.get('/products', {
        			params:{
        				categoryId:'100012',
                        pageSize:6 // 一次只接受6条数据，但是采用另外一种方式，自行获取前6条数据
                    }
                }).then((res) => {
                	// 超过6条数据则进行截取
                	// if (res.list.length >= 6) {
                	// 	this.phoneList = res.list.slice(0, 6);
                    // }
			        this.phoneList = res.list;
                })
            },
            getCartCount(){
                this.axios.get('/carts/products/sum').then((res=0)=>{
                    // 保存到vuex里面
                    this.$store.dispatch('saveCartCount', res);
                })
            },
	        logout(){
		        this.axios.post('/user/logout').then(()=>{
			        this.$message.success('退出成功');
			        // 清除操作
                    // 过期时间 -1 即刻过期
			        this.$cookie.set('userId','',{expires:'-1'});
			        this.$store.dispatch('saveUserName','');
			        this.$store.dispatch('saveCartCount','0');
		        })
	        },
            goToCart(){
        		this.$router.push('/cart');
            }
        },
	    filters: {
		    currency: function(val){
                        if (!val) return '0.00';
                        return '￥' + val.toFixed(2) + '元';
                    }
	    }
    }
</script>

<style lang="scss">
    @import "./../assets/scss/base.scss";
    @import "./../assets/scss/mixin.scss";
    @import "./../assets/scss/config.scss";
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #B0B0B0;
            .container {
                @include flex();
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;

                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart{
                        @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                /*为了children下拉菜单相对于.container定位*/
                position: relative;
                height: 112px;
                @include flex();
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            /*展示子菜单*/
                            color: $colorA;
                            .children{
                                /*显示下拉菜单*/
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            /*默认隐藏下拉框*/
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #e5e5e5;
                            /*设置阴影部分*/
                            box-shadow: 0px  7px  6px 0px rgba(0, 0, 0, 0.11);
                            /*覆盖背后的颜色，防止层级关系被遮盖*/
                            /*height: 220px;*/
                            z-index: 10;
                            background-color: #ffffff;
                            transition: height;
                            .product{
                                /* 下拉菜单右侧线条相对于product定位 */
                                position: relative;
                                float: left;
                                /*100%  /  6 ，每个product各占6份*/
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    /*a里嵌套的div是块级的，a是行内的，a是撑不开的，因此转成行内块*/
                                    display: inline-block;
                                }
                                img{
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                /* 下拉菜单右侧线条 */
                                &:before{
                                    content: '';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                /*去掉最后一根线*/
                                &:last-child:before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        /*垂直居中*/
                        align-items: center;
                        input{
                            border:none;
                            box-sizing: border-box;
                            border-right:1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg(18px,18px,"/imgs/icon-search.png");
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>