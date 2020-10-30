<template>
  <div id="app">
      <!-- router-link是vue的全局组件 -->
      <!-- replace 禁止网页的前进后退 -->
      <!-- tag 更换要渲染的标签 -->
      <!-- active-class 修改class名 -->
      <!-- router-view 展示路由视图 -->

      <!-- <router-link to="/home" replace active-class="active">首页</router-link>
      <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
      <!-- <router-link to="/home" replace >首页</router-link>
      <router-link to="/about" tag="button" replace >关于</router-link>
      <router-view></router-view> -->

      <!-- <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
      <router-view></router-view> -->

      <router-link to="/home" replace >首页</router-link>
      <router-link to="/about" tag="button" replace >关于</router-link>
      <!-- <router-link :to="'/user/'+uesrid" replace >用户</router-link> -->
      <!-- <router-link to="/profile" replace >个人文档</router-link> -->
      <!-- <router-link :to="{
        path: '/profile',
        query: {name: 'why',age: 18, height: 1.88}
        }" replace >个人文档</router-link> -->
      <button @click="uesrClick">用户</button>
      <button @click="profileClick">个人文档</button>

      <keep-alive exclude="profile,user"><!-- 保留路由不被销毁(这样来保留原先的操作) -->
        <router-view></router-view>
      </keep-alive>
      
  </div>
</template>

<script>
//params一般是一个符号(配置路由方式:/router/:id)
//大量数据一般用querty,以为query传过去的是一个对象
export default {
  name: 'App',
  data(){
    return {
      uesrid: "qihang",
    }
  },
  methods: {
    //router全局路由
    //route局部路由(路由节点)，哪一个路由处于活跃便显示这个路由
    homeClick(){
      //通过代码的方式修改路由
      //this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick(){
      //this.$router.push("/about");
      this.$router.replace("/about");
    },
    uesrClick(){
      this.$router.push('/user/'+ this.uesrid);
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age : '18',
          height: '1.88'
        }
      });
    }

  }
  
}
</script>

<style>
  /* .router-link-active{
        color: red;
    } */
    .active {
      color: red;
    }
</style>
