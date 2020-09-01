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
        <div class="nav-header"></div>
    </div>
</template>

<script>
    export default {
        name: "nav-header"
    }
</script>

<style lang="scss" scoped>
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #B0B0B0;
            .container {
                width: 1226px;
                /*保证居中*/
                margin-right: auto;
                margin-left: auto;
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
    }
</style>