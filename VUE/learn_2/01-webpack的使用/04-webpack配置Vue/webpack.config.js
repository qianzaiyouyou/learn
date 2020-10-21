
const path = require('path');

module.exports = {
    entry: './src/main.js',//入口
    output: {//出口
        //动态获取路径
        path: path.resolve(__dirname, 'dsit'),//路径
        filename: 'bundle.js',//文件名
        publicPath: 'dsit/'//在url前加上对应的路径
    },
    module: {
        rules: [//配置各种包
            {//处理css文件
            test: /\.css$/,
            //css-loader只负责将css文件进行加载
            //style-loader负责将样式添加到ODM中
            //使用多个loader时， 是从右向左读取的
            use: [ 'style-loader','css-loader' ]
            },
            {//处理less文件
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },

            {//处理图片文件
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        //当加载图片，小于limit时，会将图片编译成base64字符串形式,
                        //当加载的图片，大于limit时，需要使用file-loader模块进行加载,
                      limit: 8196,
                      name: 'img/[name].[hash:8].[ext]'//文件名不再随机产生,按设置的路径及命名
                    }
                  }
                ]
            } ,

            {//把ES6文件转换成ES5
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除(不需要转换的文件)
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015']
                  }
                }
              },

              {//配置vue文件
                  test: /\.vue$/,
                  use: ['vue-loader']
              }

        ]
    },
    resolve: {
      //extensions:webpack省略文件后缀名
      extensions: ['.js','.css','.vue'],
      //alias:别名
      alias: {
        'vue$' : 'vue/dist/vue.esm.js'
      }
      
    }

}