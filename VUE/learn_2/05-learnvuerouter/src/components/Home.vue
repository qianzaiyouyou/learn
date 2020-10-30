<template>
   <div>
       <h2>我是首页</h2>
       <P>我是首页内容</P>
       <router-link to="/home/news" tag="button" replace >新闻</router-link>
      <router-link to="/home/message" tag="button"  replace >信息</router-link>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: "Home",
  data() {
     return {
        path: "/home/news"
     }
  },

   components: {},

   computed: {},

   methods: {},
   //生命周期函数
   created() {
      console.log("created");
   },
   //这两个生命周期函数，只有该组件保持了状态使用来了keep-alive时，才是有效的
   destroyed(){
      console.log("destroyed");
   },
   activated(){
      this.$router.push(this.path);
   },
   //导航守卫
   beforeRouteLeave (to,from,next) {
      this.path = this.$route.path;
      console.log(this.path);
      next();
      }
}
</script>
<style>

</style>