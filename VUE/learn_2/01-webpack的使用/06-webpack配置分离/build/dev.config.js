
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
    //本地服务
    devServer: {
        //文件夹
        contentBase: './dsit',
        //实时监听
        inline: true
    }


})