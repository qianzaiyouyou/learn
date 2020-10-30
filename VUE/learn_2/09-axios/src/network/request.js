import axios from 'axios';


//前两个是使用回调函数来操作的

// export function request1(config ,success ,failure) {
//    //1.创建axios的实例
//    const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//      timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config)
//   .then(res => {
//     //console.log(res);
//     success(res);
//   })
//   .catch(err => {
//     //console.log(err);
//     failure(err);
//   })

// }

//传一个参数
// export function request2(config) {
//     //1.创建axios的实例
//    const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//      timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config.baseConfig)
//   .then(res => {
//     //console.log(res);
//     config.success(res);
//   })
//   .catch(err => {
//     //console.log(err);
//     config.failure(err);
//   })
// }



//使用Promise链式调用

// export function request3(config) {
//     return new Promise((resolve, reject) => {

//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         //发送真正的网络请求
//         instance(config)
//         .then(res => {
//             resolve(res);
//         })
//         .catch(err => {
//             reject(err);
//         })

//     })
// }

// export function request4(config) {

//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         //发送真正的网络请求
//         return instance(config);

// }

//return会直接自动返回一个链式调用Promise，然后直接回去调用then和catch就好了






    //2.axios的拦截器
export function request5(config) {

    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })


    //2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        //console.log(config);

        //1.比如config中的一些信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求(比如登录(token)),必须携带一些特殊的信息

        return config;
    }, err => {
        //console.log(err);
    })

    //2.2响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data;
    }, err => {
        console.log(err);
    })

    //发送真正的网络请求
    return instance(config);

}




