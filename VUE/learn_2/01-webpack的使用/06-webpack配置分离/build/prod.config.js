
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); 
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
    plugins: [//配置插件
        //配置打包文件的banner,一般用于版权声明,
        //new webpack.BannerPlugin('最终版权归aaa所有'),
      //发布的时候用不上
          //打包html到dsit里面
        // new HtmlwebpackPlugin({
        //     template: 'index.html'
        // }),
        //压缩js文件
        new UglifyjsWebpackPlugin()
      ]
})

module.exports = {



}