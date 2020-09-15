module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  productionSourceMap:false,
  // 清除prefetch防止预加载，优化路由懒加载
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}