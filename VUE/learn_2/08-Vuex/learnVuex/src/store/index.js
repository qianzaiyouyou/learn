import Vue from 'vue';
import Vuex from 'vuex';

//1.安装插件
Vue.use(Vuex);
//import {INCRRMENT}from './mutations-types';

//抽离的文件引用
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import moduleA from './module/moduleA';




const state = {
    counter :100,
    stu:[
                {name: "qaz",age: "19"},
                {name: "wsx",age: "22"},
                {name: "edc",age: "11"},
                {name: "rfv",age: "20"}
        ],
    info:{id: '566',name: 'yhn', age: '55'}
}



//2.创建对象,封装抽离
const store = new Vuex.Store({
    
    state,
    mutations,
    actions,
    getters,
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