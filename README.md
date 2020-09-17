# 技术栈

vue2 + vuex + vue-router+sass/mixin+flex \+ ES6/7+axios+elementui+svg



# 商城流程

![image-20200916202459156](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916202459.png)



# 可复用性功能组件

![image-20200916203342806](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916203343.png)



# 页面组件

![image-20200916204541740](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916204541.png)



# 插件

vuex：组件间通信。

vue-axios：方便把axios放到vue实例中去，用this去发请求，不用到每个组件中发请求了且导入axios了。

vue-awesome-swiper：轮播插件。

vue-lazyload：图片懒加载。

elementUi：使用部分ui组件。

 babel-plugin-component：方便按需引入elementUi等第三方库。

node-sass sass-loader：使用sass。

vue-cookie：cookie。

vue-infinite-scroll：滚动加载。

qrcode：生成二维码插件。



# 项目运行

**注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本**

```
git clone https://github.com/6xiaoDi/Mock-mi-on-line-shop-Vue-.git

cd mi-shop

npm install 或 yarn(推荐)

npm run serve
```



# 测试账号

> admin1
>
> admin1

> jack
>
> jack



# 效果演示

[建议使用chrome浏览器浏览](http://www.linyousishu.cn)

<img src="https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916205709.png" alt="bd97466d58571b8b82309b1d880663fb" style="zoom:50%;" />



# 目标功能

:heavy_check_mark: 注册功能

:heavy_check_mark: 登录功能

:heavy_exclamation_mark: 首页功能：由于服务器容量有限，暂未实现所有跳转（标志跳转已实现）与图片显示（仅用重复图片代替）

:heavy_exclamation_mark: 产品详情：由于服务器容量有限，只做了一个页面，但标题对应（产品详情跳转，首页鼠标变成小手的链接可进行点击）。

:heavy_check_mark: 购物车功能

:heavy_check_mark: 商品详情

:heavy_check_mark: 订单列表

:heavy_check_mark: 订单详情 

:heavy_check_mark: 订单结算

:heavy_check_mark: 订单确认

 :heavy_check_mark:下单功能

:heavy_check_mark: 添加、删除、修改收货地址

:heavy_check_mark:（微信/支付宝）付款（如果不小心付钱了，是0.01元，概不退还）

:heavy_check_mark: 视频模块及slider动画实现

:heavy_check_mark: 轮播功能

:x: 定位功能——暂未实现

:x: 选择城市——暂未实现

:x: 搜索地址——暂未实现

# 部分截图

**首页**

![image-20200916211610185](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916211610.png)

**登录/注册**

![image-20200916211638715](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916211757.png)

**购物车**

![image-20200916211849361](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916211850.png)

**订单确认**

![image-20200916211918811](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916211919.png)

**订单支付**

![image-20200916212037042](https://cdn.jsdelivr.net/gh/6xiaoDi/blogpic/images/20200903_01/20200916212037.png)

# License

[GPL](https://github.com/bailicangdu/vue2-elm/blob/master/COPYING)