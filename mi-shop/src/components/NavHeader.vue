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
                    <a href="javascript:">登录</a>
                    <a href="javascript:">注册</a>
                    <a href="javascript:" class="my-cart">
                        <span class="icon-cart"></span>
                        购物车
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
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi 红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
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
    export default {
        name: "nav-header"
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/base.scss";
    @import "./../assets/scss/mixin.scss";
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
                    .icon-cart{
                        @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        /*两张图片完整放入，外部是相框，里面是相册 宽度*2*/
                        width: 110px;
                        height: 55px;
                        /*  scss生成伪类  */
                        &:before{
                            content: "";
                            @include bgImg(55px,55px,"/imgs/mi-logo.png");
                            transition: margin .2s;
                        }
                        &:after{
                            /*content是占位的，必须加*/
                            content: "";
                            @include bgImg(55px,55px,"/imgs/mi-home.png");
                        }
                        &:hover:before{
                            margin-left: -55px;
                            /*指定margin进行过渡*/
                            transition: margin .2s;
                        }
                    }
                }
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