<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h2>-----------App内容: modules的内容---------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName1}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateNameAA">修改后名字</button>
    <button @click="updateNameA11">异步修改名字</button>
    <h2>-----------App内容---------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="infoChange">info</button>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <h2>-----------App: getters内容---------------</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stuNumber}}</h2>
    <h2>{{$store.getters.more12stu(12)}}</h2>

    <h2>-----------HelloVuex内容---------------</h2>
    <hello-vue></hello-vue>
    <!-- <hello-vue :counter="counter"></hello-vue> -->
  </div>
</template>

<script>
import HelloVue from "./components/Hellovue";
//store定义引用常量
import {
    INCRRMENT
}from './store/mutations-types';
export default {
  name: 'App',
  data() {
      return {
        message: "App",
        //counter: 0
      }
  },
  components: {
        HelloVue
  },
  methods:{
    addition(){
      this.$store.commit(INCRRMENT);
    },
    subtraction(){
      this.$store.commit('decrement');
    },
    addCount(count) {
      //payload: 负载
      //1.普通的提交封装
      //count
      //this.$store.commit('incrementCount', count);

      //2.特殊的提交封装
      //payload.count
      //将提交的内容变为了对象
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const addstu= {id: 4, name: "tgb", age: 22};
      //addstu这个位置的参数称之为payload: 负载
      this.$store.commit('addStudentIndex', addstu);
    },
    infoChange() {
      //this.$store.commit('updateInfo');


      //不够优雅~ 
      // this.$store.dispatch(
      //     'aUpdateinfo',//mutations里面的方法
      //     {//要传递的数据
      //     payloadss:"我是携带的信息",
      //     success: () => {
      //       console.log("里面已经完成了");
      //     }
      //   }
      // )

      this.$store.dispatch('aUpdateinfo','我是携带的信息').then(
        res => {
          console.log(res);
        }
      )

    },

    updateNameAA() {
      this.$store.commit('updateNameA',"李四");
    },
    updateNameA11() {
      this.$store.dispatch('aUpdateName');
    }

  },
  computed: {

  }
}
</script>

<style>

</style>
