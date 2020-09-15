<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <loading v-if="loading"></loading>
                    <div class="order" v-for="(order) in list" :key="order.orderNo">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{order.createTime}}
                                <span>|</span>
                                {{order.receiverName}}
                                <span>|</span>
                                订单号：{{order.orderNo}}
                                <span>|</span>
                                {{order.paymentTypeDesc}}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{order.payment}}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item) in order.orderItemVoList" :key="item.productId">
                                    <div class="good-img">
                                        <img v-lazy="item.productImage" alt="">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{item.productName}}</div>
                                        <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                                    </div>
                                </div>
                            </div>
                            <!--未付款-->
                            <div class="good-state fr" v-if="order.status === 20">
                                <a href="javascript:;">{{order.statusDesc}}</a>
                            </div>
                            <!--已付款-->
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
                            </div>
                        </div>
                    </div>
                    <!--使用element-ui分页器组件-->
                    <!--background 是否有背景颜色
                        layout 布局  "prev, pager, next" 上一页、分页器、下一页
                        pageSize 每页显示多少条数据
                        total 总条数
                        current-change 当前页码变化时触发
                    -->
                    <el-pagination
                            v-if="true"
                            class="pagination"
                            background
                            layout="prev, pager, next"
                            :pageSize="pageSize"
                            :total="total"
                            @current-change="handleChange"
                    >
                    </el-pagination>
                    <!--当数据没有的时候显示nodata组件-->
                    <no-data v-if="!loading && list.length === 0"></no-data>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import OrderHeader from './../components/OrderHeader'
	import Loading from './../components/Loading'
	import NoData from './../components/NoData'
	import { Pagination } from 'element-ui'
	export default{
		name:'order-list',
		components:{
			OrderHeader,
			Loading,
			NoData,
            // [] 动态解析一个变量值成字符串
            // el-pagination 对应 Pagination.name，否则直接使用Pagination
			[Pagination.name]:Pagination,
		},
		data(){
			return {
				loading:false, // 是否加载等待
				list:[], // 订单列表
				pageSize:10,
				pageNum:1, // 当前页
				total:0
			}
		},
		mounted(){
			this.getOrderList();
		},
		methods:{
			getOrderList(){
				this.loading = true;
				// 拉取前10条数据
				this.axios.get('/orders',{
					params:{
						pageSize:10,
						pageNum:this.pageNum
					}
				}).then((res)=>{
					this.loading = false;
					this.list = res.list; // 适用于分页
					this.total = res.total;
				}).catch(()=>{
					this.loading = false;
				})
			},
			goPay(orderNo){
				// 三种路由跳转方式
				// this.$router.push('/order/pay')
                // param传参
				/*this.$router.push({
                  name:'order-pay',
                  query:{
                    orderNo
                  }
                })*/
                // query传参
				this.$router.push({
					path:'/order/pay',
					query:{
						orderNo
					}
				})
			},
			// 分页器
			handleChange(pageNum){
				this.pageNum = pageNum;  // 当前页数
				this.getOrderList();
			}
		}
	}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .order-list{
        .wrapper{
            background-color:$colorJ;
            padding-top:33px;
            padding-bottom:110px;
            .order-box{
                .order{
                    @include border();
                    background-color:$colorG;
                    margin-bottom:31px;
                    &:last-child{
                        margin-bottom:0;
                    }
                    .order-title{
                        @include height(74px);
                        background-color:$colorK;
                        padding:0 43px;
                        font-size:16px;
                        color:$colorC;
                        .item-info{
                            span{
                                margin:0 9px;
                            }
                        }
                        .money{
                            font-size:26px;
                            color:$colorB;
                        }
                    }
                    .order-content{
                        padding:0 43px;
                        .good-box{
                            width:88%;
                            .good-list{
                                display: flex;
                                align-items: center;
                                height:145px;
                                .good-img{
                                    width:112px;
                                    img{
                                        width:100%;
                                    }
                                }
                                .good-name{
                                    font-size:20px;
                                    color:$colorB;
                                }
                            }
                        }
                        .good-state{
                            @include height(145px);
                            font-size: 20px;
                            color:$colorA;
                            a{
                                color:$colorA;
                            }
                        }
                    }
                }
                .pagination{
                    /*分页器右对齐*/
                    text-align:right;
                }
                /*分页器按钮背景色覆盖为主题色*/
                .el-pagination.is-background .el-pager li:not(.disabled).active{
                    background-color: #FF6600;
                }
                /*覆盖按钮主题色，建议最好在全局修改主题色更为方便*/
                .el-button--primary{
                    background-color: #FF6600;
                    border-color: #FF6600;
                }
                .load-more,.scroll-more{
                    text-align:center;
                }
            }
        }
    }
</style>