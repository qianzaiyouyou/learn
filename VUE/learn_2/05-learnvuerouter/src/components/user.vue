<template>
   <div>
       <h2>我是用户界面</h2>
       <p>我是用户的相关信息,哈哈哈</p>
       <h2>{{userId}}</h2>
       <h2>{{$route.params.id}}</h2>
   </div>
</template>

<script>
export default {
   name: "User",
   computed: {
      userId() {
         return this.$route.params.id;
      }
   }
}
</script>
<style lang='css' scoped>

</style>