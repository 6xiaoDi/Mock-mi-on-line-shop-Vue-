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
                <div class="header-search"></div>
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
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #B0B0B0;
            .container {
                display: flex;
                /*水平方向两边对齐*/
                justify-content: space-between;
                /*垂直方向居中*/
                align-content: center;
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
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        background: url("/imgs/icon-cart-checked.png") no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                display: flex;
                justify-content: space-between;
                align-content: center;
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
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url("/imgs/mi-logo.png") no-repeat center;
                            background-size: contain;
                            transition: margin .2s;
                        }
                        &:after{
                            /*content是占位的，必须加*/
                            content: "";
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url("/imgs/mi-home.png") no-repeat center;
                            background-size: contain;
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
                    width: 200px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            /*展示子菜单*/
                        }
                    }
                }
            }
        }
    }
</style>