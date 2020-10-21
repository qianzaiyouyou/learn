
const path = require('path');

module.exports = {
    entry: './src/main.js',//入口
    output: {//出口
        //动态获取路径
        path: path.resolve(__dirname, 'dsit'),//路径
        filename: 'bundle.js'//文件名
    }
}