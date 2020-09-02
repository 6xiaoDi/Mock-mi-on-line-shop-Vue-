<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://blog.csdn.net/u013946061" target="_blank">溜_x_i_a_o_迪主页</a><span>|</span>
            <a href="https://github.com/6xiaoDi" target="_blank">6xiaoDi主页</a><span>|</span>
            <a href="https://blog.csdn.net/u013946061/category_10240427.html" target="_blank">Vue快速入门</a><span>|</span>
            <a href="https://blog.csdn.net/u013946061/category_10144895.html" target="_blank">React快速入门</a><span>|</span>
            <a href="https://blog.csdn.net/u013946061/category_10146797.html" target="_blank">git快速入门</a>
        </div>
        <div class="copyright">
            Copyright ©2020 <span class="domain">6xiaodi.com</span> All Rights Reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-footer"
    }
</script>

<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: #FF6600;
            }
        }
    }
</style>