import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//axios的基本使用
// axios({
//   //默认方式是get
//   url: 'http://123.207.32.32:8000/home/multidata',
//   //方式
//   method: "get"
// }).then(res => {
//   console.log(res);
// })
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res);
// })



//提取全局的配置
//使用全局的axios和对应的配置在进行网络请求

// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;//超时报错

// //2.axios发送并发请求
// axios.all([axios({
//   //baseURLL: 'http://123.207.32.32:8000',
//   //timeout: 5000,
//   url: '/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]
// )
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))

//4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//    timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })


  //封装一个request模块
   import {request1, request2, request3, request4, request5} from './network/request';

   //传了三个参数
  //  request1({
  //   url: '/home/multidata'
  //  }, res => {
  //    console.log(res);
  //  },err => {
  //   console.log(err);
  // })

  // request2({
  //   baseConfig:{
  //     url: '/home/multidata'
  //   },
  //   success: function(res){
  //     console.log(res);
  //   },
  //   failure (err){
  //     console.log(err);
  //   }
  // })

  // request3({
  //       url: '/home/multidata'
  //     }).then(res => {
  //       console.log(res);
  //     }).catch(err => {
  //       console.log(err);
  //     })

      // request4({
      //   url: '/home/multidata'
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })

      request5({
        url: '/home/multidata'
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
