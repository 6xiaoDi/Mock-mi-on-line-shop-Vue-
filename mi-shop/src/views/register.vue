<template>
    <div class="register">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="register-form">
                    <h3>
                        <span class="checked">注册账号</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入用户名" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password1">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请再次输入密码" v-model="password">
                    </div>
                    <div class="input">
                        <input type="text" placeholder="请输入email" v-model="email">
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="register">注册</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="https://blog.csdn.net/u013946061" target="_blank">溜_x_i_a_o_迪主页</a><span>|</span>
                <a href="https://github.com/6xiaoDi" target="_blank">6xiaoDi主页</a><span>|</span>
                <a href="https://blog.csdn.net/u013946061/category_10240427.html" target="_blank">Vue快速入门</a><span>|</span>
                <a href="https://blog.csdn.net/u013946061/category_10144895.html" target="_blank">React快速入门</a><span>|</span>
                <a href="https://blog.csdn.net/u013946061/category_10146797.html" target="_blank">git快速入门</a>
            </div>
            <p class="copyright">Copyright ©2020 <span class="domain">6xiaodi.com</span> All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: 'register',
		data(){
			return {
				username:'',
				password:'',
				password1:'',
                email:'',
				// 前端与后端交流的凭证（cookie发送服务端），这里没用token
				userId:''
			}
		},
		methods:{
			...mapActions(['saveUserName']),
			login(){
				let { username,password } = this;
				// 调用后台接口
				this.axios.post('/user/login',{
					//es6简写方式
					username,
					password
				}).then((res)=>{
					// 接收后台数据
					// Cookie 暂时设置一个月过期
					this.$cookie.set('userId',res.id,{expires:'Session'});
					// 保存用户名
					// 一般用法
					// this.$store.dispatch('saveUserName', res.username);
					// mapActions用法
					this.saveUserName(res.username);
					// 回到首页
					// this.$router.push('index');
					this.$router.push({
						name:'index',
						// query 明文传参，会导致进入登录页面的url多了参数内容，没有任何意义
						// 这里换成params传参
						params:{
							from:'login'
						}
					});
				})
			},
			register(){
				let errMsg='';
				if (!this.username) {
					errMsg = '用户名不能为空';
                } else if (this.password !== this.password1) {
					errMsg = '两次密码不一致';
                }
				if(errMsg){
					this.$message.error(errMsg);
					return;
				}
				// 调用后台注册接口
				this.axios.post('/user/register',{
					username: this.username,
					password: this.password,
					email:this.email
				}).then(()=>{
					this.$message.success('注册成功');
					this.login();
				})
			}
		}
	}
</script>
<style lang="scss">
    .register{
        &>.container{
            height:113px;
            img{
                width:auto;
                height:100%;
            }
        }
        .wrapper{
            background:url('/imgs/login-bg.jpg') no-repeat center;
            .container{
                height:576px;
                .register-form{
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    width:410px;
                    height:510px;
                    background-color:#ffffff;
                    position:absolute;
                    bottom:29px;
                    right:0;
                    h3{
                        line-height:23px;
                        font-size:24px;
                        text-align:center;
                        margin:40px auto 49px;
                        .checked{
                            color:#FF6600;
                        }
                        .sep-line{
                            margin:0 32px;
                        }
                    }
                    .input{
                        display:inline-block;
                        width:348px;
                        height:50px;
                        border:1px solid #E5E5E5;
                        margin-bottom:20px;
                        input{
                            width: 100%;
                            height: 100%;
                            border: none;
                            padding: 18px;
                        }
                    }
                    .btn{
                        width:100%;
                        line-height:50px;
                        margin-top:10px;
                        font-size:16px;
                    }
                    .tips{
                        margin-top:14px;
                        display:flex;
                        justify-content:space-between;
                        font-size:14px;
                        cursor:pointer;
                        .sms{
                            color:#FF6600;
                        }
                        .reg{
                            color:#999999;
                            span{
                                margin:0 7px;
                            }
                        }
                    }
                }
            }
        }
        .footer{
            height:100px;
            padding-top:60px;
            color:#999999;
            font-size:16px;
            text-align:center;
            .footer-link{
                a{
                    color:#999999;
                    display:inline-block;
                }
                span{
                    margin:0 10px;
                }
            }
            .copyright{
                margin-top:13px;
                .domain{
                    color: #FF6600;
                }
            }
        }
    }
</style>