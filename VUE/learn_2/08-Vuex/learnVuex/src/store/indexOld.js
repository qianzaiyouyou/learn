import Vue from 'vue';
import Vuex from 'vuex';

import {
    INCRRMENT
}from './mutations-types';


//1.安装插件
Vue.use(Vuex);



//模块,添加的状态树
const moduleA = {
    state: {
        name: "张三"
    },mutations: {
        updateNameA(state,payload){
            state.name = payload;
        }
    },actions: {

        aUpdateName(context) {
            console.log(context); 
            setTimeout(() =>{
                context.commit("updateNameA", "王五");
            },1000)

        }

    },getters: {
        fullName1(state) {
            return state.name + "qazwsx";
        },
        fullName3(state, getters, rootState) {
            return getters.fullName1 + rootState.counter;
        }
    }
}



//2.创建对象
const store = new Vuex.Store({
    state:{
        counter :100,
        stu:[
                {name: "qaz",age: "19"},
                {name: "wsx",age: "22"},
                {name: "edc",age: "11"},
                {name: "rfv",age: "20"}
            ],
         info:{id: '566',name: 'yhn', age: '55'}
    },
    mutations:{
        //increment方法会默认传递参数state
        //方法
        [INCRRMENT](state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementCount(state, payload) {
            console.log(payload);
            state.counter+=payload.count;
        },
        addStudentIndex(state, addstu) {
            state.stu.push(addstu);
        },
        updateInfo(state) {
            //后续添加响应式的属性和属性值
            Vue.set(state.info, 'address', '洛杉矶');
            
            //删除属性
            //该方式做不到响应式
            //delete state.info.age;
            //可 
            //Vue.delete(state.info, 'age');
        }
    },actions: {        
        //默认参数 context: 上下文   
        // aUpdateinfo(context,payload) {
        //     setTimeout(() => {
        //         context.commit("updateInfo");
        //         console.log(payload.payloadss);
        //         payload.success();
                
        //     },1000)
        // }
        
        
        aUpdateinfo(context,payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("updateInfo");
                    console.log(payload);
                    
                    resolve("里面已经完成了111");
                },1000)
            })
        }

    },getters: {
        //getters方法里面有两个参数(state, getters)
        //state是属性state的数据
        //getters可以直接拿getters里面的内容,自调用
        powerCounter(state){
            return state.counter * state.counter;
        },
        more20stu(state){
            return state.stu.filter(s=> s.age >=20);
        },
        more20stuNumber(state, getters){
            return getters.more20stu.length;
        },
        more12stu(state){
            return function (age) {
                return state.stu.filter(s=> s.age >= age);
            }

            // return age => {
            //     return state.stu.filter(s=> s.age >= age);
            // }

        }
    },
    modules: {//模块,新的状态树
        a:moduleA
    }
})
//3.导出store对象
export default store;



//对象的解构
const obj = {
    name: "qwe",
    age: 18,
    address:"北京"
}

const {name,age,address} = obj;